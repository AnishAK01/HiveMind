const Post = require("../models/post.model");

exports.createPost = async (req, res) => {
  const { url, name, tags, description } = req.body;
  try {
    const post = await Post.create({
      url,
      name,
      tags,
      description,
      createdBy: req.user._id
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("createdBy", "name profilePic");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const userId = req.user._id;

    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
    } else {
      post.likes = post.likes.filter(id => id.toString() !== userId.toString());
    }

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.bookmarkPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = req.user;

    if (!post.bookmarks.includes(user._id)) {
      post.bookmarks.push(user._id);
      user.bookmarks.push(post._id);
    } else {
      post.bookmarks = post.bookmarks.filter(id => id.toString() !== user._id.toString());
      user.bookmarks = user.bookmarks.filter(id => id.toString() !== post._id.toString());
    }

    await post.save();
    await user.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
