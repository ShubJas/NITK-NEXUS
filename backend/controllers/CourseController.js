const courseModel = require("../models/CourseModel");
const ProfessorModel = require("../models/ProfessorModel");
const getCourseByCode = asyncHandler(async (req, res) => {
  const course = await Course.findOne({ courseCode: req.params.courseCode })
    .populate({
      path: "instructor",
      select: "name email imageUrl title officeHours phone",
    })
    .populate({
      path: "assignments",
      select: "title dueDate status",
    });

  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }

  res.json({
    success: true,
    data: course,
  });
});
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
