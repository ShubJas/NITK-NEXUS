import React, { useState } from 'react';
import { FaArrowRight, FaCheck, FaArrowLeft } from 'react-icons/fa';

const QuizComponent = ({ onSubmit, currentSubjects }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    {
      id: 'interest',
      question: "Which of these areas interests you the most?",
      options: [
        "Software Development",
        "Data Science & AI",
        "Core Engineering (Mechanical/Civil/Electrical)",
        "Finance & Consulting",
        "Product Management",
        "Research & Development",
        "Cybersecurity",
        "UI/UX Design"
      ],
      type: "single"
    },
    {
      id: 'strengths',
      question: "What are your strongest skills? (Select up to 3)",
      options: [
        "Problem Solving",
        "Programming",
        "Mathematics",
        "Communication",
        "Team Leadership",
        "Creativity",
        "Analytical Thinking",
        "Time Management"
      ],
      type: "multiple",
      max: 3
    },
    {
      id: 'preferred_work',
      question: "What type of work environment do you prefer?",
      options: [
        "Fast-paced startup",
        "Structured corporate",
        "Research-oriented",
        "Remote/flexible",
        "Entrepreneurial",
        "Collaborative team-based"
      ],
      type: "single"
    },
    {
      id: 'time_commitment',
      question: "How many hours per week can you dedicate to placement prep?",
      options: [
        "Less than 5 hours",
        "5-10 hours",
        "10-15 hours",
        "15-20 hours",
        "More than 20 hours"
      ],
      type: "single"
    },
    {
      id: 'learning_style',
      question: "What is your preferred learning style?",
      options: [
        "Visual (videos, diagrams)",
        "Auditory (lectures, discussions)",
        "Reading/Writing (books, articles)",
        "Kinesthetic (hands-on practice)"
      ],
      type: "single"
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const quizResults = {
      currentSubjects,
      quizAnswers: answers
    };
    await onSubmit(quizResults);
    setIsSubmitting(false);
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Placement Preparation Quiz</h2>
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">
          {questions[currentQuestion].question}
        </h3>
        {questions[currentQuestion].type === "single" ? (
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, idx) => (
              <div
                key={idx}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  answers[questions[currentQuestion].id] === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => handleAnswer(questions[currentQuestion].id, option)}
              >
                {option}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, idx) => {
              const isSelected = answers[questions[currentQuestion].id]?.includes(option);
              return (
                <div
                  key={idx}
                  className={`p-4 border rounded-lg cursor-pointer transition-all flex items-center ${
                    isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    const currentAnswers = answers[questions[currentQuestion].id] || [];
                    if (isSelected) {
                      handleAnswer(questions[currentQuestion].id, currentAnswers.filter(a => a !== option));
                    } else {
                      if (currentAnswers.length < (questions[currentQuestion].max || Infinity)) {
                        handleAnswer(questions[currentQuestion].id, [...currentAnswers, option]);
                      }
                    }
                  }}
                >
                  <div
                    className={`w-5 h-5 border rounded mr-3 flex items-center justify-center ${
                      isSelected ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-300'
                    }`}
                  >
                    {isSelected && <FaCheck size={12} />}
                  </div>
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex justify-between">
        {currentQuestion > 0 && (
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center"
            onClick={handlePrevious}
          >
            <FaArrowLeft className="mr-2" /> Previous
          </button>
        )}
        {currentQuestion < questions.length - 1 ? (
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-auto flex items-center"
            onClick={handleNext}
            disabled={!answers[questions[currentQuestion].id]}
          >
            Next <FaArrowRight className="ml-2" />
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 ml-auto flex items-center"
            onClick={handleSubmit}
            disabled={isSubmitting || !answers[questions[currentQuestion].id]}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Quiz'}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;