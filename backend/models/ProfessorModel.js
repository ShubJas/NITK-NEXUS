const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // If you require a custom id, rename it and set it unique:
  customId: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // Assuming you have a Course model
    },
  ],
});

const Professor = mongoose.model("Professor", professorSchema);
module.exports = Professor;
