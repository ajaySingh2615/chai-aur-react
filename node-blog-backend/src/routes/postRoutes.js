import express from "express";
import * as postController from "../controllers/postController.js";

const router = express.Router();

// define the endpoints
// POST  /api/posts
router.post("/", postController.createPost);

// GET  /api/posts
router.get("/", postController.getAllPosts);

// PUT /api/posts/:id
router.put("/:id", postController.updatePost);

// DELETE /api/posts/:id
router.delete("/:id", postController.deletePost);

export default router;
