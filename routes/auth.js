const express = require("express");
const router = express.Router();

const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// @route GET api/auth
// @desc Get logged in user
// @access Private
router.get(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Get logged in user");
  }
);

// @route POST api/auth
// @desc Auth user & get token
// @access Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
