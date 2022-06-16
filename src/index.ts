// import { dbConnect, testEnv } from "./models/index";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";

import dotenv from "dotenv";
import express from "express";
import { dbConnect } from "./utils";
dotenv.config({});
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// console.log(DB_USER, DB_PASSWORD, DB_NAME);
// testEnv();
const main = async () => {
  const app = express();
  await dbConnect();

  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolver = {
    Query: {
      hello: () => "Hello world!",
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers: resolver });
  // mongoose.connect(process.env.CONNECTION_URL!);

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};
main();
