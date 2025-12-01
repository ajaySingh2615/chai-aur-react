import { db } from "../config/db.js";
import { comments } from "../db/schema.js";
import { eq } from "drizzle-orm";

// create comment
export const createCommentService = async (postId, commentData) => {
  // Add the postId to the data object
  const newCommentData = { ...commentData, postId: postId };

  const result = await db.insert(comments).values(newCommentData).returning();
  return result[0];
};

// Get Comments by Post ID
export const getCommentsByPostIdService = async (postId) => {
  // SQL: SELECT * FROM comments WHERE post_id = X
  const allComments = await db
    .select()
    .from(comments)
    .where(eq(comments.postId, postId));

  return allComments;
};
