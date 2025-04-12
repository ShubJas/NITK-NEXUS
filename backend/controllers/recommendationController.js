const { generateRecommendation } = require('../services/llmService');
const Student = require('../models/Student');

const generateStudyRecommendation = async (req, res) => {
  try {
    const { quizAnswers } = req.body;
    const studentId = req.user.id; // Assuming authenticated user
    
    // Fetch student data
    const student = await Student.findById(studentId).populate('currentSubjects');
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    const currentSubjects = student.currentSubjects.map(sub => sub.name);
    
    // Generate recommendation
    const recommendation = await generateRecommendation({
      currentSubjects,
      quizAnswers
    });
    
    // Save recommendation to student profile
    student.placementRecommendation = recommendation;
    await student.save();
    
    res.json(recommendation);
  } catch (error) {
    console.error('Error generating recommendation:', error);
    res.status(500).json({ error: 'Failed to generate recommendation' });
  }
};

const getRecommendation = async (req, res) => {
  try {
    const studentId = req.user.id;
    const student = await Student.findById(studentId);
    
    if (!student || !student.placementRecommendation) {
      return res.status(404).json({ error: 'No recommendation found' });
    }
    
    res.json(student.placementRecommendation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recommendation' });
  }
};

module.exports = {
  generateStudyRecommendation,
  getRecommendation
};