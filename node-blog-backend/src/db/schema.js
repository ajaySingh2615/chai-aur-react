// We import data types from 'pg-core' because we are using Postgres
import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

// Define the 'posts' table
export const posts = pgTable("posts", {
  // Primary key (Auto Increment)
  id: serial("id").primaryKey(),

  // Title: Varchar(255), Not null
  title: varchar("title", { length: 255 }).notNull(),

  // Content: Text (Unlimited length), Not Null
  content: text("content").notNull(),

  // Author: Varchar(100), Not Null
  author: varchar("author", { length: 100 }).notNull(),

  // Created At: Timestamp, Default is NOW()
  createdAt: timestamp("created_at").defaultNow(),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  body: text("body").notNull(),

  // THE FOREIGN KEY (The Link)
  // This column holds the ID of the Post
  // .references(() => posts.id) ensures referential integrity (Post must exist)
  postId: integer("post_id")
    .references(() => posts.id)
    .notNull(),

  createdAt: timestamp("created_at").defaultNow(),
});
