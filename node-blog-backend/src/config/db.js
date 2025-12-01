import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// 1. create the connection pool
// 2. Pool? Why? Because opening a new connection for every user request is slow.
// A pool keeps a few connections open and resuses them. (Interview Gold)
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// 2. Initialize Drizzle
export const db = drizzle(pool);

// 3. Simple test to see if it connects
pool
  .connect()
  .then(() => console.log("Database Connected Successfully!"))
  .catch((err) => console.error("Database Connection Failed:", err));
