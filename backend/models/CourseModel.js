const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
  },
  courseProgress: {
    type: Number,
    default: 0,
  },
  courseCredits: {
    type: Number,
    required: true,
  },
  courseSyllabus: {
    type: String,
    required: true,
  },
  courseProfessor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Professor",
  },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
