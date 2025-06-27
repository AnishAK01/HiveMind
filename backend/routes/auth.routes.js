const express = require('express');
const router = express.Router();
    const { protect } = require("../middlewares/auth.middleware");
const { registerUser, loginUser } = require('../controllers/auth.controller');

router.post('/register', registerUser);
router.post('/login',protect, loginUser);

module.exports = router;
