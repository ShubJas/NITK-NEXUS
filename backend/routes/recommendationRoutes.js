const express = require("express");
const router = express.Router();
const recommendationController = require("../controllers/recommendationController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/generate/:rollNo",
  authMiddleware.requireSignIn,
  recommendationController.generateStudyRecommendation
);
router.get(
  "/get/:rollNo",
  authMiddleware.requireSignIn,
  recommendationController.getRecommendation
);

module.exports = router;
