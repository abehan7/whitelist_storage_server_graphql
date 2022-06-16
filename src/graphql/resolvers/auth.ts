import { db } from "./../../models";
import Caver, { SignatureData } from "caver-js";

const caver = new Caver("https://kaikas.cypress.klaytn.net:8651/");
type ISignatureData = object | SignatureData | string[];

const resolvers = {
  Query: {
    authenticate: async (_: any, args: { signature: ISignatureData }) => {
      // const signature = await caver.klay.sign(message, address);
      const { signature } = args;
      const publicKey = caver.utils.recoverPublicKey("sign message", signature);
      const wallet_address = caver.klay.getAccountKey(publicKey);
      console.log(wallet_address);
      // const wallet_address = web3.eth.accounts.recover(
      //   "Message to sign",
      //   signer
      // );
      // const doc = await db.User.findOne({ wallet_address });
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
