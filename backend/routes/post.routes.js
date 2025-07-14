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
router.post("/create", protect, createPost);
router.get("/", getAllPosts);
router.put("/like/:id", protect, likePost);
router.put("/bookmark/:id", protect, bookmarkPost);
router.post("/upload", protect, upload.single("image"), async (req, res) => {
  try {
    const { name, tags, description, category } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;

    const post = await Post.create({
      name,
      tags: tags.split(',').map(tag => tag.trim()),
      description,
      category,
      url: imageUrl,
      createdBy: req.user._id,
    });

    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error uploading post" });
  }
});

module.exports = router;
