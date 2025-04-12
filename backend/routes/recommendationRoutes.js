const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');
const authMiddleware = require('../middleware/auth');

router.post('/recommendations', authMiddleware, recommendationController.generateStudyRecommendation);
router.get('/recommendations', authMiddleware, recommendationController.getRecommendation);

module.exports = router;