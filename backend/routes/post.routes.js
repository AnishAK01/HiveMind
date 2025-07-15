const express = require("express");
const upload = require("../middlewares/upload.middleware");
const Post = require("../models/post.model");
const {
  createPost,
  getAllPosts,
  likePost,
  bookmarkPost,
  getPostsByCategory,
  getPostsByUser
} = require("../controllers/post.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/category/:category", getPostsByCategory);
router.get("/my-posts", protect, getPostsByUser);
router.get("/", getAllPosts);
router.post("/create", protect, createPost);
router.put("/like/:id", protect, likePost);
router.put("/bookmark/:id", protect, bookmarkPost);

// ✅ UI/Pic post upload with 3 images
router.post(
  "/upload",
  protect,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { name, tags, description, category } = req.body;

      const newPost = new Post({
        name,
        description,
        tags: tags?.split(",").map(tag => tag.trim()),
        category,
       url: "/uploads/" + req.files?.image?.[0]?.filename,
image2: req.files?.image2?.[0] ? "/uploads/" + req.files.image2[0].filename : null,
image3: req.files?.image3?.[0] ? "/uploads/" + req.files.image3[0].filename : null,
        createdBy: req.user._id,
        likes: [],
        bookmarks: [],
        views: 0
      });

      await newPost.save();
      res.status(201).json({ message: "Post uploaded", post: newPost });
    } catch (err) {
      console.error("Upload error:", err);
      res.status(500).json({ error: "Server error during upload" });
    }
  }
);

module.exports = router;
