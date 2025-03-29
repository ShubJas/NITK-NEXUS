const express = require("express");
const router = express.Router();
const { getStudentCourses } = require("../controllers/StudentController");
const { requireSignIn } = require("../middlewares/authMiddleware");

// Define the route to get a student's courses by their ID
// GET /api/students/:id/courses
router.get("/:rollNo/courses", requireSignIn, getStudentCourses);

module.exports = router;
