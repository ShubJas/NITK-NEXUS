const studentModel = require("../models/StudentModel");
const courseModel = require("../models/CourseModel");

const getStudentCourses = async (req, res) => {
  try {
    const { rollNo } = req.params; // Fixed typo here

    // Populate the course details from the Course collection
    const student = await studentModel.findOne({ rollNo }).populate({
      path: "courses.course",
      select: "courseCode title description creditHours",
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // Format the response
    const courses = student.courses.map((courseEnrollment) => {
      const course = courseEnrollment.course;
      return {
        courseId: course._id,
        courseCode: course.courseCode,
        courseName: course.title,
        courseProgress: courseEnrollment.progress,
        courseDescription: course.description,
        courseCredits: course.creditHours,
        grade: courseEnrollment.grade,
        enrolledAt: courseEnrollment.enrolledAt,
      };
    });

    return res.status(200).json({
      success: true,
      message: "Student courses fetched successfully",
      data: {
        studentName: student.name,
        rollNo: student.rollNo,
        totalCredits: student.totalCredits,
        cgpa: student.cgpa,
        courses,
      },
    });
  } catch (err) {
    console.error("Error fetching student courses:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

module.exports = { getStudentCourses };
