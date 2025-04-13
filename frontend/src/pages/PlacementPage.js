import React, { useState, useEffect } from "react";
import QuizComponent from "../components/PlacementRecommendation/QuizComponent";
import RecommendationResult from "../components/PlacementRecommendation/RecommendationResult";
import LoadingScreen from "../components/PlacementRecommendation/LoadingScreen";
import {
  generateRecommendation,
  getRecommendation,
} from "../services/recommendationService";
import axios from "axios";

const PlacementPage = () => {
  const [currentSubjects, setCurrentSubjects] = useState([]);
  const [recommendation, setRecommendation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasExistingRecommendation, setHasExistingRecommendation] =
    useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const rollNo = localStorage.getItem("rollNo"); // You can dynamically replace this if needed
        const token = localStorage.getItem("token");

        if (!token) {
          console.log("No authentication token found. Please log in.");
          return;
        }

        const { data } = await axios.get(
          `http://localhost:8000/api/v1/students/${rollNo}/courses`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCurrentSubjects(data?.data?.courses || []);

        // Try fetching existing recommendation
        const recResponse = await getRecommendation();
        if (recResponse) {
          setRecommendation(recResponse);
          setHasExistingRecommendation(true);
        }
      } catch (error) {
        console.error(
          "Error fetching courses or recommendation:",
          error.message
        );
      }
    };

    fetchSubjects();
  }, []);

  const handleQuizSubmit = async (quizResults) => {
    setIsLoading(true);
    try {
      const recommendation = await generateRecommendation(quizResults);
      setRecommendation(recommendation);
      setHasExistingRecommendation(true);
    } catch (error) {
      console.error("Error generating recommendation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    setRecommendation(null);
    setHasExistingRecommendation(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {isLoading && <LoadingScreen />}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Placement Preparation Assistant
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Get personalized study recommendations based on your academic
            profile and career interests
          </p>
        </div>

        {hasExistingRecommendation ? (
          <div>
            <div className="flex justify-end mb-4">
              <button
                onClick={handleRegenerate}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Regenerate Recommendation
              </button>
            </div>
            <RecommendationResult recommendation={recommendation} />
          </div>
        ) : (
          <QuizComponent
            onSubmit={handleQuizSubmit}
            currentSubjects={currentSubjects}
          />
        )}
      </div>
    </div>
  );
};

export default PlacementPage;
