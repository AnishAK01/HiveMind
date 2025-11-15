
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+@.+\..+/, "Please enter a valid email"]
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    enum: ["student", "designer", "developer"]
  },
  password: {
    type: String,
    required: true
  },

  profilePic: {
    type: String,
    default: function () {
      return `https://avatar.iran.liara.run/public${this._id}`;
    }
  },
  bio: {
    type: String,
    default: ""
  },

  likedPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],

  bookmarks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],
  hive: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],


  createdAt: {
    type: Date,
    default: Date.now
  }
});
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
