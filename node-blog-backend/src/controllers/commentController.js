import * as commentService from "../services/commentService.js";

export const createComment = async (req, res) => {
  try {
    const { postId } = req.params; // Get ID from URL
    const commentData = req.body;

    const newComment = await commentService.createCommentService(
      postId,
      commentData
    );

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCommentsByPostId = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await commentService.getCommentsByPostIdService(postId);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
