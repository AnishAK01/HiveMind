const express = require("express");
const {
  createPost,
  getAllPosts,
  likePost,
  bookmarkPost
} = require("../controllers/post.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/create", protect, createPost);
router.get("/", getAllPosts);
router.put("/like/:id", protect, likePost);
router.put("/bookmark/:id", protect, bookmarkPost);

module.exports = router;
