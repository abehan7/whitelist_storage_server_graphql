import helloResolvers from "./hello";
const resolvers = {
  ...helloResolvers,
  Query: {
    ...helloResolvers.Query,
  },
};

export default resolvers;
