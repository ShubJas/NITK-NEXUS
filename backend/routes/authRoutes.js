const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

// Register Route
router.post("/register", registerController);

// Login Route
router.post("/login", loginController);

module.exports = router;
