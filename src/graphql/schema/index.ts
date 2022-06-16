import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String!
    users: [User!]!
    user(wallet_address: String): User!
  }
  type User {
    _id: String
    wallet_address: String
    createdAt: String
    isAdmin: String
  }
  input UserInput {
    wallet_address: String
  }
  type Mutation {
    createUser(userInput: UserInput!): User
  }
`;

export default typeDefs;
