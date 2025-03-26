const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [
    {
      courseId: String,
      courseName: String,
      courseProgress: Number,
      courseDescription: String,
      courseCredits: Number,
    },
  ],
  totalCredits: Number,
  gpa: Number,
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
