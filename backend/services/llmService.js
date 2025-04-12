const axios = require('axios');

const generateRecommendation = async (studentData) => {
  const prompt = `
Create a comprehensive placement preparation recommendation for a college student based on the following information:

Current Subjects: ${studentData.currentSubjects.join(', ')}

Quiz Results:
- Primary Interest: ${studentData.quizAnswers.interest}
- Key Strengths: ${studentData.quizAnswers.strengths.join(', ')}
- Preferred Work Environment: ${studentData.quizAnswers.preferred_work}
- Weekly Time Commitment: ${studentData.quizAnswers.time_commitment}

Return output in the following JSON format:
{
  "careerPath": "Recommended career path",
  "careerPathDescription": "Why this is suitable",
  "learningPath": [
    {
      "topic": "Topic Name",
      "description": "Importance",
      "resources": [{"name": "Name", "url": "URL"}]
    }
  ],
  "timeline": [{"week": "Week 1-2", "tasks": "Tasks"}],
  "additionalTips": ["Tip 1", "Tip 2"]
}
`;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
            role: "user"
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // Gemini returns text in a slightly different structure
    const raw = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    return JSON.parse(raw);
  } catch (error) {
    console.error('Gemini API error:', error?.response?.data || error.message);
    throw new Error('Failed to generate recommendation from Gemini');
  }
};

module.exports = { generateRecommendation };
