import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaArrowLeft,
  FaGraduationCap,
  FaChartLine,
  FaLightbulb,
  FaClock,
  FaBookReader,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { generateRecommendation } from "./recommendationService"; // Adjust the import path as needed

const QuizComponent = ({ onSubmit, currentSubjects }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizResults, setQuizResults] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const questions = [
    {
      id: "interest",
      question: "Which of these areas sparks your curiosity the most?",
      icon: <FaLightbulb className="text-yellow-500" />,
      options: [
        "Software Development",
        "Data Science & AI",
        "Core Engineering",
        "Finance & Consulting",
        "Product Management",
        "Entrepreneurship",
        "Design (UI/UX)",
        "Cybersecurity",
        "Media & Communication",
        "Psychology & Human Behavior",
        "Arts & Humanities",
        "Social Impact & NGOs",
        "Research & Development",
      ],
      type: "single",
    },
    {
      id: "strengths",
      question: "What are your superpowers? (Select up to 3)",
      icon: <FaGraduationCap className="text-blue-500" />,
      options: [
        "Problem Solving",
        "Programming",
        "Mathematics",
        "Communication",
        "Team Leadership",
        "Creativity",
        "Analytical Thinking",
        "Time Management",
        "Design Thinking",
        "Critical Thinking",
        "Persuasion",
        "Strategic Planning",
      ],
      type: "multiple",
      max: 3,
    },
    {
      id: "preferred_work",
      question: "Where do you thrive?",
      icon: <FaChartLine className="text-green-500" />,
      options: [
        "Fast-paced startup",
        "Structured corporate",
        "Research lab",
        "Remote/flexible",
        "Building my own venture",
        "Collaborative teams",
      ],
      type: "single",
    },
    {
      id: "time_commitment",
      question: "Weekly placement prep time?",
      icon: <FaClock className="text-purple-500" />,
      options: [
        "Less than 5 hours",
        "5-10 hours",
        "10-15 hours",
        "15-20 hours",
        "More than 20 hours",
      ],
      type: "single",
    },
    {
      id: "learning_style",
      question: "How do you learn best?",
      icon: <FaBookReader className="text-red-500" />,
      options: [
        "Visual (videos, diagrams)",
        "Auditory (lectures, discussions)",
        "Reading/Writing (books, articles)",
        "Kinesthetic (hands-on practice)",
      ],
      type: "single",
    },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const quizData = {
        currentSubjects,
        quizAnswers: answers,
      };

      // Call the API to generate recommendations
      console.log(quizData);
      const recommendation = await generateRecommendation(quizData);

      const results = {
        currentSubjects,
        quizAnswers: answers,
        recommendation: recommendation,
      };

      await onSubmit(results);
      setQuizResults(results);
      setShowResults(true);
      console.log("Recommendation generated successfully:", recommendation);
    } catch (err) {
      console.error("Error generating recommendation:", err);
      setError("Failed to generate recommendations. Please try again.");
      // Fallback to local recommendation if API fails
      const results = {
        currentSubjects,
        quizAnswers: answers,
        recommendation: generateLocalRecommendation(answers),
      };
      setQuizResults(results);
      setShowResults(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fallback recommendation generator if API fails
  const generateLocalRecommendation = (answers) => {
    const interest = answers.interest || "";
    const strengths = answers.strengths || [];

    if (interest.includes("Software") || interest.includes("Programming")) {
      return {
        path: "Software Development Track",
        courses: [
          "CS201 - Data Structures",
          "CS301 - Algorithms",
          "CS401 - Database Systems",
        ],
        resources: [
          "LeetCode Premium",
          "Design Patterns Course",
          "System Design Primer",
        ],
        companies: ["Microsoft", "Google", "Amazon", "Flipkart", "Zomato"],
      };
    } else if (interest.includes("Data Science")) {
      return {
        path: "Data Science Track",
        courses: [
          "MA202 - Statistics",
          "CS601 - Machine Learning",
          "CS701 - AI",
        ],
        resources: [
          "Kaggle Competitions",
          "Fast.ai Course",
          "Python for Data Analysis",
        ],
        companies: [
          "Analytics Vidhya",
          "Fractal",
          "ZS Associates",
          "American Express",
        ],
      };
    } else {
      return {
        path: "General Placement Prep",
        courses: [
          "HS101 - Professional Communication",
          "CS101 - Programming Basics",
        ],
        resources: [
          "Crack the Coding Interview",
          "GeeksforGeeks",
          "InterviewBit",
        ],
        companies: ["TCS", "Infosys", "Wipro", "Accenture"],
      };
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults && quizResults) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl"
      >
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p>{error}</p>
            <p className="text-sm mt-1">Showing fallback recommendations.</p>
          </div>
        )}

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-indigo-800 mb-2">
            🎯 Your Personalized Roadmap
          </h2>
          <p className="text-lg text-gray-600">
            Based on your quiz responses, here's our recommendation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
              <FaChartLine className="mr-3" /> Career Path
            </h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-blue-800 text-lg">
                {quizResults.recommendation.path}
              </h4>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">
                Suggested Courses:
              </h4>
              <ul className="space-y-2">
                {quizResults.recommendation.courses?.map((course, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" /> {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
              <FaGraduationCap className="mr-3" /> Resources
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">
                Study Materials:
              </h4>
              <ul className="space-y-2">
                {quizResults.recommendation.resources?.map((resource, i) => (
                  <li key={i} className="flex items-center">
                    <FaBookReader className="text-blue-500 mr-2" /> {resource}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">
                Target Companies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {quizResults.recommendation.companies?.map((company, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold"
          >
            Go to Your Dashboard
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl"
    >
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
          NITK Nexus Placement Quiz
        </h2>
        <p className="text-gray-600">
          Help us create your personalized placement roadmap
        </p>
      </div>

      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-white shadow-sm mr-4">
              {questions[currentQuestion].icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {questions[currentQuestion].question}
            </h3>
          </div>

          {questions[currentQuestion].type === "single" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {questions[currentQuestion].options.map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 font-medium ${
                    answers[questions[currentQuestion].id] === option
                      ? "border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md"
                      : "border-gray-200 bg-white hover:bg-gray-50"
                  }`}
                  onClick={() =>
                    handleAnswer(questions[currentQuestion].id, option)
                  }
                >
                  {option}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {questions[currentQuestion].options.map((option, idx) => {
                const isSelected =
                  answers[questions[currentQuestion].id]?.includes(option);
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 border rounded-xl cursor-pointer flex items-center transition-all duration-200 ${
                      isSelected
                        ? "border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      const currentAnswers =
                        answers[questions[currentQuestion].id] || [];
                      if (isSelected) {
                        handleAnswer(
                          questions[currentQuestion].id,
                          currentAnswers.filter((a) => a !== option)
                        );
                      } else {
                        if (
                          currentAnswers.length <
                          (questions[currentQuestion].max || Infinity)
                        ) {
                          handleAnswer(questions[currentQuestion].id, [
                            ...currentAnswers,
                            option,
                          ]);
                        }
                      }
                    }}
                  >
                    <div
                      className={`w-5 h-5 mr-3 border rounded flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-blue-500 border-blue-500 text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {isSelected && <FaCheck size={12} />}
                    </div>
                    {option}
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-8">
        {currentQuestion > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-white text-gray-800 rounded-xl hover:bg-gray-100 flex items-center shadow-sm"
            onClick={handlePrevious}
          >
            <FaArrowLeft className="mr-2" /> Previous
          </motion.button>
        )}

        {currentQuestion < questions.length - 1 ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:shadow-md ml-auto flex items-center disabled:opacity-50"
            onClick={handleNext}
            disabled={!answers[questions[currentQuestion].id]}
          >
            Next <FaArrowRight className="ml-2" />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl hover:shadow-md ml-auto flex items-center disabled:opacity-50"
            onClick={handleSubmit}
            disabled={isSubmitting || !answers[questions[currentQuestion].id]}
          >
            {isSubmitting ? "Generating Your Roadmap..." : "Get My Results"}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default QuizComponent;
