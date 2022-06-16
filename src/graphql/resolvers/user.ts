import { GraphQLArgs } from "graphql";
import { UserInput } from "../../interfaces";
import { db } from "../../models";
const resolvers = {
  Query: {
    users: async () => {
      return await db.User.find();
    },

    user: async (_: any, args: { wallet_address: String }) => {
      return await db.User.findOne({ wallet_address: args.wallet_address });
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
