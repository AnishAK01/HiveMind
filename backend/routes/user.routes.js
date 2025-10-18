const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth.middleware');
const User = require('../models/user.model');

router.get('/me', protect, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});
router.get("/search", async (req, res) => {
  const { q } = req.query;
  try {
    const users = await User.find({
      username: { $regex: q, $options: "i" }
    }).select("name username role profilePic");
    users.forEach(user => {
  console.log(`${user.name}, ${user.username}, ${user.role}`);
});

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
