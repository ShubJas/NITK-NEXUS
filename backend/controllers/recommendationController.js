const { generateRecommendation } = require("../services/llmService");
const Student = require("../models/StudentModel");
const Course = require("../models/CourseModel"); // Add this import

const generateStudyRecommendation = async (req, res) => {
  try {
    const { quizAnswers } = req.body;
    const { rollNo } = req.params;

    // Fetch student with proper population
    const student = await Student.findOne({ rollNo })
      .populate({
        path: "courses.course",
        model: "Course", // Explicitly specify the model
      })
      .exec();

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Extract course names
    const currentSubjects = student.courses.map((course) =>
      course.course ? course.course.title : "Unknown Course"
    );

    // Generate recommendation
    const recommendation = await generateRecommendation({
      currentSubjects,
      quizAnswers,
    });

    // Save recommendation
    student.placementRecommendation = recommendation;
    await student.save();

    res.json(recommendation);
  } catch (error) {
    console.error("Error generating recommendation:", error);
    res.status(500).json({
      error: "Failed to generate recommendation",
      details: error.message,
    });
  }
};

const getRecommendation = async (req, res) => {
  try {
    const { rollNo } = req.params;
    const student = await Student.findOne({ rollNo });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    if (!student.placementRecommendation) {
      return res.status(404).json({ error: "No recommendation found" });
    }

    res.json(student.placementRecommendation);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch recommendation",
      details: error.message,
    });
  }
};

module.exports = {
  generateStudyRecommendation,
  getRecommendation,
};
