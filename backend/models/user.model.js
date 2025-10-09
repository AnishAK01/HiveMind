
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
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

   profilePic: {
    type: String,
    default: function () {
      return `https://i.pravatar.cc/150?u=${this._id}`;
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
