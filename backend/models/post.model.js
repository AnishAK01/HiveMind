const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  image2: String,
  image3: String,
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["ui", "pic"],
    required: true,
  },
  tags: [String],
  description: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  bookmarks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
