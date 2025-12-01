import express from "express";
import * as commentController from "../controllers/commentController.js";

// mergeParams: true allows us to access :postId from the parent router
const router = express.Router({ mergeParams: true });

// POST /api/posts/:postId/comments
router.post("/", commentController.createComment);

// GET /api/posts/:postId/comments
router.get("/", commentController.getCommentsByPostId);

export default router;
