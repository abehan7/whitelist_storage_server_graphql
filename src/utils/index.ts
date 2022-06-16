import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.eqm62.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const dbConnect = () =>
  mongoose
    .connect(
      MONGO_URL as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions
    )
    .catch((error) => console.log(`${error} did not connect`));
