const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_CHAT_API_KEY });

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    console.log("Message recive in backend: ", message);
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: message,
    });

    const text = await response.text(); // Don't forget the `await` here
    return res.status(200).json({ reply: text });
  } catch (err) {
    console.error("Gemini API error:", err);
    return res.status(500).json({
      error: "Failed to get response from Gemini",
      details: err.message,
    });
  }
};

module.exports = { sendMessage };
