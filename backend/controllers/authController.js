const User = require("../models/StudentModel");
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const JWT = require("jsonwebtoken");
const Student = require("../models/StudentModel");
const Course = require("../models/CourseModel");
const mongoose = require("mongoose");

const registerController = async (req, res) => {
  const {
    email,
    password,
    rollNo,
    semester,
    department,
    totalCredits,
    courses,
  } = req.body;

  try {
    // 1. Basic validation
    if (!email || !password || !rollNo || !department || totalCredits == null) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    // 2. Duplicate-check
    if (await Student.findOne({ rollNo })) {
      return res.status(409).send({
        success: false,
        message: "Student already exists",
      });
    }

    // 3. Validate courses if provided
    let coursesData = [];
    if (Array.isArray(courses) && courses.length > 0) {
      // Verify all courses exist in the database
      const courseIds = courses.map(
        (c) => new mongoose.Types.ObjectId(c.course)
      ); // Fixed: using 'new' keyword
      const existingCourses = await Course.find({
        _id: { $in: courseIds },
      }).lean();

      if (existingCourses.length !== courses.length) {
        return res.status(400).send({
          success: false,
          message: "One or more courses not found",
        });
      }

      // Create a map for quick lookup
      const courseMap = {};
      existingCourses.forEach((course) => {
        courseMap[course._id.toString()] = course;
      });

      // Map to the format expected by the Student schema
      coursesData = courses.map((course) => {
        const dbCourse = courseMap[course.course];
        return {
          course: new mongoose.Types.ObjectId(course.course), // Fixed: using 'new' keyword
          courseCode: dbCourse.courseCode || course.courseCode,
          title: dbCourse.title || course.title,
          creditHours: dbCourse.creditHours || course.creditHours,
          department: dbCourse.department || course.department,
          progress: course.progress || 0,
          grade: course.grade || null,
          enrolledAt: course.enrolledAt || new Date(),
        };
      });
    }

    // 4. Create the student with hashed password
    // const hashedPassword = await hashPassword(password);
    const newStudent = await Student.create({
      email,
      password,
      rollNo,
      semester,
      department,
      totalCredits,
      courses: coursesData,
    });

    // Don't send password back in response
    const studentResponse = newStudent.toObject();
    delete studentResponse.password;

    return res.status(201).send({
      success: true,
      message: "Student created successfully",
      data: studentResponse,
    });
  } catch (err) {
    console.error("Error creating student:", err);
    return res.status(500).send({
      success: false,
      message: err.message || "Error creating student",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { rollNo, password } = req.body;

    const student = await Student.findOne({ rollNo: rollNo }).select(
      "+password"
    );
    if (!student) {
      return res.status(404).send({
        success: false,
        message: "Student not found",
      });
    }

    /* Compare provided password with hashed password in DB
    const match = await comparePassword(password, student.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Incorrect password",
      });
    }
 */
    // Create JWT token including only the necessary fields
    const token = JWT.sign(
      {
        id: student._id,
        name: student.name,
        email: student.email,
        rollNo: student.rollNo,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).send({
      success: true,
      message: "Student logged in successfully",
      token: token,
      student: student,
    });
  } catch (err) {
    console.error("Error logging in student", err.message);
    return res.status(500).send({
      success: false,
      message: "Error logging in student",
    });
  }
};

module.exports = {
  loginController,
  registerController,
};
