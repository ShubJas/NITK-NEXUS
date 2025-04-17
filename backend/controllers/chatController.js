const { chatReply } = require("../services/llmChatService");

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    console.log("Received message in backend:", message);

    if (!message || typeof message !== "string") {
      return res
        .status(400)
        .json({ error: "Message is required and must be a string" });
    }

    // Delegate the AI call to the llmService
    const reply = await chatReply(message);

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Error in sendMessage:", error);
    return res.status(500).json({
      error: "Failed to get response from AI service",
      details: error.message,
    });
  }
};

module.exports = { sendMessage };
