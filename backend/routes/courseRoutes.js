const express = require("express");
const router = express.Router();
const {
  getCourseByCode,
  getAllCourses,
} = require("../controllers/CourseController");

// Define the route to get a student's courses by their ID
// GET /api/students/:id/courses
router.get("/code/:courseCode", getCourseByCode);
router.get("/allCourses", getAllCourses);

module.exports = router;
