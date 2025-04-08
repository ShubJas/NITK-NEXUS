const Professor = require("../models/ProfessorModel");
const asyncHandler = require("express-async-handler");

// @desc    Get professor by ID
// @route   GET /api/v1/professors/:id
// @access  Private
const getProfessorById = asyncHandler(async (req, res) => {
  const professor = await Professor.findById(req.params.id)
    .select("-__v")
    .populate("coursesTeaching", "courseCode title");

  if (!professor) {
    res.status(404);
    throw new Error("Professor not found");
  }

  res.json({
    success: true,
    data: professor,
  });
});

// @desc    Get all professors
// @route   GET /api/v1/professors
// @access  Private
const getAllProfessors = asyncHandler(async (req, res) => {
  const professors = await Professor.find().select("-__v").sort({ name: 1 });

  res.json({
    success: true,
    count: professors.length,
    data: professors,
  });
});

module.exports = {
  getProfessorById,
  getAllProfessors,
};
