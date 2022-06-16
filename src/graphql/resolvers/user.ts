import { GraphQLArgs } from "graphql";
import { UserInput } from "../../interfaces";
import { db } from "../../models";
const resolvers = {
  Query: {
    users: async () => {
      return [{ _id: "1", wallet_address: "2", createdAt: "3", isAdmin: "4" }];
    },
  },
  Mutation: {
    async createUser(_: any, args: UserInput) {
      try {
        const { wallet_address } = args.userInput;
        const user = await new db.User({ wallet_address });
        const result = await user.save();
        return result;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
};

export default resolvers;
