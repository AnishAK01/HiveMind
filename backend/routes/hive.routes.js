const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth.middleware');
const User = require('../models/user.model');

// Add user to hive
router.post('/add/:id', protect, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    const targetUserId = req.params.id;

    if (!currentUser.hive.includes(targetUserId)) {
      currentUser.hive.push(targetUserId);
      await currentUser.save();
    }

    res.status(200).json({ message: 'User added to hive' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove user from hive
router.post('/remove/:id', protect, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    const targetUserId = req.params.id;

    currentUser.hive = currentUser.hive.filter(id => id.toString() !== targetUserId);
    await currentUser.save();

    res.status(200).json({ message: 'User removed from hive' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get hive list
router.get('/', protect, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id).populate('hive', 'name username role profilePic');
    res.status(200).json(currentUser.hive);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;