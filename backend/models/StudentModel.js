const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student name is required"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },
  rollNo: {
    type: String,
    required: [true, "Roll number is required"],
    unique: true,
    uppercase: true,
  },
  year: {
    type: String,
    required: true,
    enum: ["1st", "2nd", "3rd", "4th"],
    default: "1st",
  },
  branch: {
    type: String,
    required: true,
    enum: ["CSE", "ECE", "EEE", "ME", "CE"],
    uppercase: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    select: false, // Don't return password in queries by default
  },
  courses: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
      progress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
      },
      grade: {
        type: String,
        enum: ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F", null],
        default: null,
      },
      enrolledAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  totalCredits: {
    type: Number,
    default: 0,
    min: 0,
  },
  cgpa: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  placementRecommendation: {
    type: {
      careerPath: String,
      careerPathDescription: String,
      learningPath: [
        {
          topic: String,
          description: String,
          resources: [
            {
              name: String,
              url: String,
            },
          ],
        },
      ],
      timeline: [
        {
          week: String,
          tasks: String,
        },
      ],
      additionalTips: [String],
    },
    default: null,
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
