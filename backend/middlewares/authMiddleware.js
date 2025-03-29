const JWT = require("jsonwebtoken");
const User = require("../models/StudentModel");

const requireSignIn = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Authorization header is missing" });
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token || token.length < 10) {
      return res.status(401).json({ error: "Invalid or missing token" });
    }

    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    console.error("Error verifying token:", err.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = { requireSignIn };
