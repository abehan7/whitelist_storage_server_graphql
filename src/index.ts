import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import cors from "cors";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import { dbConnect } from "./utils";

dotenv.config({});
const PORT = process.env.PORT || 4000;

const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  await dbConnect();

  // const middleware: any[] = [];
  // const schemaWithMiddleware = applyMiddleware(schema, ...middleware);

  const context = ({ req }: { req: express.Request }) => {
    // if (!req.headers.authorization)
    //   throw new AuthenticationError("empty token");
    if (!req.headers.authorization) return { user: undefined };

    const token = req.headers.authorization.substr(7);
    const user = "this user is authenticated";
    // const user = users.find((user) => user.token === token);
    // if (!user) throw new AuthenticationError('invalid token');
    return { user };
  };

  const server = new ApolloServer({ typeDefs, resolvers, context });

  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
};
main();
