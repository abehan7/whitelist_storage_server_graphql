import dotenv from "dotenv";
dotenv.config();
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error("Missing environment variables");
}

const config: Record<string, string> = {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
};

export default config;
