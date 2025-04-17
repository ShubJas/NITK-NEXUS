import React, { useState } from "react";
import axios from "axios";

const ChatBot = ({ closeChat }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Append user message first
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      // Update the URL if your backend is hosted elsewhere
      const res = await axios.post(
        "http://localhost:8000/api/v1/chat/message",
        {
          message: input,
        }
      );
      setMessages([...newMessages, { text: res.data.reply, sender: "bot" }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { text: "Sorry, something went wrong.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-80 flex flex-col">
      {/* Header */}
      <div className="bg-blue-500 text-white p-3 flex justify-between items-center rounded-t-lg">
        <span>Chat with NITK Bot</span>
        <button
          className="text-2xl font-bold cursor-pointer"
          onClick={closeChat}
        >
          &times;
        </button>
      </div>
      {/* Chat Box */}
      <div className="p-3 flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-100 self-end"
                : "bg-gray-100 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      {/* Input Area */}
      <div className="border-t border-gray-200 p-2 flex">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-700"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
