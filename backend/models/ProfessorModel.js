const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  customId: { type: String, required: true, unique: true },
  description: { type: String },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // Reference to Course model
    },
  ],
});

const Professor = mongoose.model("Professor", professorSchema);
module.exports = Professor;
