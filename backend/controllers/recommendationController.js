const { generateRecommendation } = require("../services/llmService");
const Student = require("../models/StudentModel");

const generateStudyRecommendation = async (req, res) => {
  try {
    const { quizAnswers } = req.body;
    const { rollNo } = req.params;
    console.log("Quiz Answers:", quizAnswers);
    console.log("Student rollNo:", rollNo);
    // Fetch student data
    const student = await Student.findOne({ rollNo }).populate(
      "currentSubjects"
    );
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const currentSubjects = student.currentSubjects.map((sub) => sub.name);

    // Generate recommendation
    const recommendation = await generateRecommendation({
      currentSubjects,
      quizAnswers,
    });

    // Save recommendation to student profile
    student.placementRecommendation = recommendation;
    await student.save();

    res.json(recommendation);
    return res;
  } catch (error) {
    console.error("Error generating recommendation:", error);
    res.status(500).json({ error: "Failed to generate recommendation" });
  }
};

const getRecommendation = async (req, res) => {
  try {
    const { rollNo } = req.params;
    const student = await Student.findOne({ rollNo });

    if (!student || !student.placementRecommendation) {
      return res.status(404).json({ error: "No recommendation found" });
    }

    res.json(student.placementRecommendation);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recommendation" });
  }
};

module.exports = {
  generateStudyRecommendation,
  getRecommendation,
};
