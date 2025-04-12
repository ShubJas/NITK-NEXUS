const courseModel = require("../models/CourseModel");
const ProfessorModel = require("../models/ProfessorModel");
const getCourseByCode = async (req, res) => {
  try {
    const { courseCode } = req.params;

    const course = await courseModel
      .findOne({ courseCode })
      .populate("instructor");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course fetched successfully",
      course: course,
    });
  } catch (err) {
    console.error("Error fetching course:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.find({}).populate("instructor");
    return res.status(200).json({
      success: true,
      message: "Courses fetched successfully",
      courses: courses,
    });
  } catch (err) {
    console.error("Error fetching courses:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { getCourseByCode, getAllCourses };
