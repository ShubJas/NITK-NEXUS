const express = require('express');
const router = express.Router();
const {
  getAllUniversities,
  getUniversity,
  createUniversity,
  updateUniversity,
  deleteUniversity,
  searchUniversities
} = require('../controllers/UniController');

// Public routes
router.get('/', getAllUniversities);
router.get('/search', searchUniversities);
router.get('/:id', getUniversity);

// Protected admin routes (add auth middleware later)
router.post('/', createUniversity);
router.put('/:id', updateUniversity);
router.delete('/:id', deleteUniversity);

module.exports = router;