import { db } from "./../../models";
import Web3 from "web3";
const web3 = new Web3("https://kaikas.cypress.klaytn.net:8651/");
const resolvers = {
  Query: {
    authenticate: async (_: any, args: { signer: string }) => {
      const { signer } = args;
      const wallet_address = web3.eth.accounts.recover(
        "Message to sign",
        signer
      );
      const doc = await db.User.findOne({ wallet_address });
      // 이제 여기서 토큰만들어서 보내주기
      return true;
      // 여기서 signer가지고 와서 인증하기
      //   const found = db.User.find(
      //     (user) => user.username === username && user.password === password
      //   );
      //   const found = db.User.findOne({ wallet_address });
      //   const found = { token: "123" };
      //   console.log(found);
      //   return found && found.token;
      // return { wallet_address, isAdmin };
    },
  },
};

export default resolvers;
