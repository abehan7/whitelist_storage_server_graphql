import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT: number = (process.env.PORT as unknown as number) || 5000 || 5001;
mongoose
  .connect(
    process.env.CONNECTION_URL as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`[rest-api]: Bot rest-api is running at PORT ${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
