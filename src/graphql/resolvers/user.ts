import { GraphQLArgs } from "graphql";

const resolvers = {
  Query: {
    users: () => {
      return [{ _id: "1", wallet_address: "1", createdAt: "1", isAdmin: "1" }];
    },
  },
};

export default resolvers;
