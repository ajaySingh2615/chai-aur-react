import dotenv from "dotenv";
dotenv.config();

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/db/schema.js", // Where is your schema?
  out: "./drizzle", // Where to save the SQL files?
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
