import * as postService from "../services/postService.js";

// Create Post
export const createPost = async (req, res) => {
  try {
    const postData = req.body;
    const newPost = await postService.createPostService(postData);

    // 201 created
    res.status(201).json(newPost);
  } catch (error) {
    // 500 server error
    res.status(500).json({ error: error.message });
  }
};

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPostsService();

    // 200 OK
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Controller
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params; // GET ID from URL (/api/posts/1)
    const postData = req.body; // GET Data from JSON

    const updatedPost = await postService.udpatePostService(id, postData);

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Controller
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    await postService.deletePostService(id);

    // 200 Ok with a message
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
