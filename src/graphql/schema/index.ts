import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String!
    users: [User!]!
    user(wallet_address: String): User!
  }
  type User {
    _id: ID
    wallet_address: String
    createdAt: String
    isAdmin: Boolean
  }
  input UserInput {
    wallet_address: String
  }
  type Mutation {
    createUser(wallet_address: String!): User
    deleteUser(wallet_address: String!): User
  }
`;

export default typeDefs;
