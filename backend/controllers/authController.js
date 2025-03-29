const User = require("../models/StudentModel");
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const JWT = require("jsonwebtoken");
const Student = require("../models/StudentModel");

const registerController = async (req, res) => {
  const {
    name,
    email,
    password,
    rollNo,
    year,
    branch,
    totalCredits,
    cgpa,
    courses,
  } = req.body;
  try {
    // Check for required fields (courses is optional)
    if (
      !name ||
      !email ||
      !password ||
      !rollNo ||
      !branch ||
      totalCredits == null ||
      cgpa == null
    ) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if a student with the same email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(409).send({
        success: false,
        message: "Student already exists",
      });
    }

    // Hash the password before storing
    const hashedPassword = await hashPassword(password);

    // Validate and prepare the courses data if provided.
    // Here we assume courses is an array of objects.
    // You can add further validations as necessary.
    let coursesData = [];
    if (courses && Array.isArray(courses)) {
      coursesData = courses.map((courseObj) => {
        // Ensure each course object has the required course field.
        if (!courseObj.course) {
          throw new Error("Each course must have a course reference");
        }
        return {
          course: courseObj.course,
          progress: courseObj.progress || 0,
          grade: courseObj.grade || null,
          enrolledAt: courseObj.enrolledAt || Date.now(),
        };
      });
    }

    // Create a new student with the provided data
    const newStudent = await Student.create({
      name,
      email,
      password: hashedPassword,
      rollNo,
      year,
      branch,
      totalCredits,
      cgpa,
      courses: coursesData,
    });

    return res.status(201).send({
      success: true,
      message: "Student created successfully",
      data: newStudent,
    });
  } catch (err) {
    console.error("Error creating student: ", err.message);
    return res.status(500).send({
      success: false,
      message: "Error creating student",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find student by email
    const student = await Student.findOne({ email: email }).select("+password");
    if (!student) {
      return res.status(404).send({
        success: false,
        message: "Student not found",
      });
    }

    // Compare provided password with hashed password in DB
    const match = await comparePassword(password, student.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Incorrect password",
      });
    }

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
