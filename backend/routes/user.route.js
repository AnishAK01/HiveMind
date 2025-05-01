const express = require("express");
const User = require("../model/user.model");
const { getUser, updateUser } = require("../controller/user.controler");

const router = express.Router();

router.get("/:id",getUser);
router.get("/:id",updateUser);



module.exports = router         