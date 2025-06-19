const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const User = require("../models/User");

// Protected route to access the dashboard
router.get("/dashboard", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({
      message: `Welcome to your dashboard, ${user.name}`,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard data" });
  }
});

module.exports = router;
