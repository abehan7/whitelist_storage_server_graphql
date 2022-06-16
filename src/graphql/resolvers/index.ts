import helloResolvers from "./hello";
import userResolvers from "./user";
const resolvers = {
  ...helloResolvers,
  ...userResolvers,
  Query: {
    ...helloResolvers.Query,
    ...userResolvers.Query,
  },
};

export default resolvers;
