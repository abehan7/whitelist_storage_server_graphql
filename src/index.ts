import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import cors from "cors";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import { dbConnect } from "./utils";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "graphql-tools";

dotenv.config({});
const PORT = process.env.PORT || 4000;

const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  await dbConnect();

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const middleware: any[] = [];
  const schemaWithMiddleware = applyMiddleware(schema, ...middleware);

  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
};
main();
