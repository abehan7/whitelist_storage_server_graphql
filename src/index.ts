import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import { dbConnect } from "./utils";

dotenv.config({});

// console.log(DB_USER, DB_PASSWORD, DB_NAME);
// testEnv();
const main = async () => {
  const app = express();
  await dbConnect();

  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};
main();
