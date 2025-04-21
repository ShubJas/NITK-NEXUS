import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ChatBot = ({ closeChat }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Append user message
    const updated = [...messages, { text: input, sender: "user" }];
    setMessages(updated);
    setInput("");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/chat/message`,
        { message: input }
      );
      setMessages([...updated, { text: res.data.reply, sender: "bot" }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...updated,
        { text: "Sorry, something went wrong.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 max-h-[90vh] flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-blue-600 text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
        <h2 className="text-lg font-semibold">Chat with NITK Bot</h2>
        <button
          className="text-2xl font-bold hover:text-gray-200"
          onClick={closeChat}
        >
          &times;
        </button>
      </header>

      {/* Messages */}
      <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] p-2 rounded-lg break-words whitespace-pre-line shadow-sm
              ${
                msg.sender === "user"
                  ? "bg-blue-100 self-end text-right"
                  : "bg-gray-100 self-start text-left"
              }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <footer className="sticky bottom-0 bg-white px-4 py-2 border-t border-gray-200 rounded-b-lg flex items-center gap-2">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={sendMessage}
        >
          Send
        </button>
      </footer>
    </div>
  );
};

export default ChatBot;
