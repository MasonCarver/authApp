const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { registerUser, loginUser } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

// Register a new user
router.post("/register", registerUser);

// Log in an existing user
router.post("/login", loginUser);

// Get current user info (protected)
router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
});

module.exports = router;





