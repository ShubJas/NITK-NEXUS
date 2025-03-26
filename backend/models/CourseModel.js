const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    courseCode: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    semester: { type: String, required: true },
    department: { type: String, required: true },
    prerequisites: { type: [String], default: [] },
    learningOutcomes: { type: [String], default: [] },
    textbooks: [
      {
        title: String,
        author: String,
        link: String,
      },
    ],
    progress: { type: Number, default: 0 },
    creditHours: { type: Number, required: true },
    schedule: { type: String, required: true },
    location: { type: String, required: true },
    midtermExam: {
      date: Date,
      time: String,
      venue: String,
    },
    finalExam: {
      date: Date,
      time: String,
      venue: String,
    },
    assessment: {
      assignments: { type: Number, default: 30 },
      midterm: { type: Number, default: 30 },
      final: { type: Number, default: 40 },
    },
    instructor: {
      name: String,
      title: String,
      email: String,
      phone: String,
      officeHours: String,
      imageUrl: String,
    },
    weeklySchedule: [
      {
        weekNumber: Number,
        title: String,
        status: String,
        topics: [String],
        resources: [
          {
            type: String,
            title: String,
            link: String,
          },
        ],
      },
    ],
    assignments: [
      {
        number: Number,
        title: String,
        description: String,
        dueDate: Date,
        status: String,
        grade: Number,
      },
    ],
    resources: [
      {
        type: String,
        title: String,
        link: String,
        thumbnail: String,
        duration: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
