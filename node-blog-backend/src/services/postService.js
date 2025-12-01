import { db } from "../config/db.js";
import { posts } from "../db/schema.js";
import { eq } from "drizzle-orm";

// Feature 1: Create a new Post
export const createPostService = async (postData) => {
  // .returning() is a Postgres special feature: it gives us back the saved data immediately
  const result = await db.insert(posts).values(postData).returning();

  // Drizzle returns an array [ {id: 1, ...} ], so we return the first item
  return result[0];
};

// Feature 2: Get All Posts
export const getAllPostsService = async () => {
  const allPosts = await db.select().from(posts);
  return allPosts;
};

// Feature 3: Update a Post
export const udpatePostService = async (id, postData) => {
  const result = await db
    .update(posts)
    .set(postData)
    .where(eq(posts.id, id))
    .returning();

  return result[0];
};

// Feature 4: Delete a Post
export const deletePostService = async (id) => {
  await db.delete(posts).where(eq(posts.id, id));
};
