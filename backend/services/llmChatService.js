const axios = require("axios");

const chatReply = async (query) => {
  const prompt = `
    Consider the user as student of National Institute of technology. Doing undergrad in Computer Science, taking that in mind give the output.Below is the user question-> ${query}
    `;
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
            role: "user",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Retrieve and clean the raw response text
    // Grab the model’s text
    const raw = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    return raw.trim();
  } catch (error) {
    console.error("Gemini API error:", error?.response?.data || error.message);
    throw new Error("Failed to generate recommendation from Gemini");
  }
};

module.exports = { chatReply };
