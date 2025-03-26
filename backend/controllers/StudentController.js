// controllers/studentController.js
const studentModel = require("../models/StudentModel");

const getStudentCourses = async (req, res) => {
  try {
    // 1. Destructure the "id" from req.params
    const { roolNo } = req.params;

    // 2. Find the student by _id
    const student = await studentModel.findOne({ roolNo });
    if (!student) {
      return res.status(404).json({
        message: "Student not found",
        success: false,
      });
    }

    // 3. Map over the student's courses to create a custom array
    const courses = student.courses.map((course) => {
      return {
        courseId: course.courseId,
        courseName: course.courseName,
        courseProgress: course.courseProgress,
        courseDescription: course.courseDescription,
        courseCredits: course.courseCredits,
      };
    });

    // 4. Send the response
    return res.status(200).json({
      message: "Student Courses fetched successfully",
      success: true,
      courses: courses,
    });
  } catch (err) {
    console.error("Error fetching Courses from db:", err.message);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

module.exports = { getStudentCourses };
