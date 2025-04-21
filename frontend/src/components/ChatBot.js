import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaMicrophone,
  FaImage,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = ({ closeChat }) => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm NexMentor. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
      quickReplies: [
        "Placement queries",
        "Academic questions",
        "Higher studies opportunities",
        "Coding doubts",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Append user message
    const userMessage = { text: input, sender: "user", timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/chat/message`,
        { message: input }
      );

      // Simulate typing delay for better UX
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: res.data.reply,
            sender: "bot",
            timestamp: new Date(),
            quickReplies: res.data.quickReplies || [],
          },
        ]);
        setIsTyping(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }
  };

  const handleQuickReply = (reply) => {
    setInput(reply);
    // Auto-send when clicking quick reply
    setTimeout(() => {
      sendMessage();
    }, 300);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => closeChat(), 300); // Wait for animation to complete
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 w-96 max-h-[80vh] flex flex-col bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50"
        >
          {/* Header */}
          <header className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <FaRobot className="text-xl" />
              <div>
                <h2 className="text-lg font-semibold">NITK Nexus Assistant</h2>
                <p className="text-xs opacity-80">
                  {isTyping ? "Typing..." : "Online"}
                </p>
              </div>
            </div>
            <button
              className="text-xl hover:text-gray-200 transition"
              onClick={handleClose}
            >
              <FaTimes />
            </button>
          </header>

          {/* Messages */}
          <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: msg.sender === "user" ? 10 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl break-words whitespace-pre-line shadow-sm
                    ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none"
                        : "bg-white border border-gray-200 rounded-tl-none"
                    }`}
                >
                  <div className="text-sm">{msg.text}</div>
                  <div
                    className={`text-xs mt-1 ${
                      msg.sender === "user" ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-3">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages[messages.length - 1]?.quickReplies?.length > 0 &&
            !isTyping && (
              <div className="px-4 py-2 bg-gray-100 border-t border-gray-200 flex flex-wrap gap-2">
                {messages[messages.length - 1].quickReplies.map((reply, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-3 py-1.5 bg-white text-sm rounded-full border border-gray-300 hover:bg-gray-50 transition"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            )}

          {/* Input Area */}
          <footer className="sticky bottom-0 bg-white px-4 py-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full transition">
                <FaImage />
              </button>
              <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full transition">
                <FaMicrophone />
              </button>
              <input
                type="text"
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-full hover:shadow-md transition disabled:opacity-50"
                onClick={sendMessage}
                disabled={!input.trim()}
              >
                <FaPaperPlane />
              </motion.button>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Enhanced Chat Icon Component
export const ChatIcon = ({ toggleChat }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleChat}
    >
      <div className="relative">
        <motion.div
          animate={{
            width: isHovered ? 180 : 64,
          }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-4 cursor-pointer flex items-center justify-center hover:shadow-lg h-16"
        >
          <FaRobot className="text-xl" />
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="ml-3 whitespace-nowrap font-medium"
              >
                Ask NITK Bot
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          animate={{ scale: isHovered ? 1 : 0 }}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm"
        >
          !
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChatBot;
