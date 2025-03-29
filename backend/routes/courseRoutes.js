const express = require("express");
const router = express.Router();
const {
  getCourseByCode,
  getAllCourses,
} = require("../controllers/CourseController");
const { requireSignIn } = require("../middlewares/authMiddleware");

// Define the route to get a student's courses by their ID
// GET /api/students/:id/courses
router.get("/code/:courseCode", requireSignIn, getCourseByCode);
router.get("/allCourses", requireSignIn, getAllCourses);

module.exports = router;
