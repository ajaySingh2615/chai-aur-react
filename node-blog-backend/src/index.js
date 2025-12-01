import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

// load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// USE THE ROUTES
app.use("/api/posts", postRoutes);
app.use("/api/posts/:postId/comments", commentRoutes);

// Basic Test route
app.get("/", (req, res) => {
  res.json({ message: "node.js server is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
