import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import { dbConnect } from "./utils";

dotenv.config({});
const PORT = process.env.PORT || 4000;

const main = async () => {
  const app = express();
  await dbConnect();

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
