const express = require("express");
const upload = require("../middlewares/cloudinary.middlewareUpload");
const Post = require("../models/post.model");
const fs = require('fs'); 
const cloudinary = require('../utils/cloudinary');
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

      const uploadToCloudinary = async (filePath) => {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: "hivemind_posts",
        });
        return result.secure_url;
      };

      const imageUrl = req.files.image ? await uploadToCloudinary(req.files.image[0].path) : null;
      const image2Url = req.files.image2 ? await uploadToCloudinary(req.files.image2[0].path) : null;
      const image3Url = req.files.image3 ? await uploadToCloudinary(req.files.image3[0].path) : null;

      const newPost = new Post({
        name,
        description,
        tags: tags?.split(",").map(tag => tag.trim()),
        category,
        url: imageUrl,
        image2: image2Url,
        image3: image3Url,
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
