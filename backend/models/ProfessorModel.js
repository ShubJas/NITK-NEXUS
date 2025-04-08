const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Professor name is required"],
      trim: true,
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
    phone: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      enum: [
        "Professor",
        "Associate Professor",
        "Assistant Professor",
        "Lecturer",
      ],
      default: "Professor",
    },
    department: {
      type: String,
      required: true,
      enum: [
        "CSE",
        "ECE",
        "EEE",
        "ME",
        "CE",
        "Mathematics",
        "Physics",
        "Chemistry",
      ],
    },
    officeHours: {
      type: String,
    },
    officeLocation: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    coursesTeaching: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

const Professor = mongoose.model("Professor", professorSchema);
module.exports = Professor;
