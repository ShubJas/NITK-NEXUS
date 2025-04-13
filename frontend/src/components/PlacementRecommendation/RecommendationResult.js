import React, { useState } from 'react';
import { FaBook, FaCalendarAlt, FaChartLine, FaLightbulb, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const RecommendationResult = ({ recommendation }) => {
  const [expandedSections, setExpandedSections] = useState({
    careerPath: true,
    learningPath: true,
    timeline: true,
    additionalTips: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!recommendation) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Personalized Placement Preparation Plan</h2>
      
      <div className="mb-8">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('careerPath')}
        >
          <h3 className="text-lg font-semibold flex items-center">
            <FaChartLine className="mr-2 text-blue-500" />
            Career Path Recommendation
          </h3>
          {expandedSections.careerPath ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.careerPath && (
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p className="font-medium">{recommendation.careerPath}</p>
            <p className="text-gray-600 mt-2">{recommendation.careerPathDescription}</p>
          </div>
        )}
      </div>
      
      <div className="mb-8">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('learningPath')}
        >
          <h3 className="text-lg font-semibold flex items-center">
            <FaBook className="mr-2 text-blue-500" />
            Recommended Learning Path
          </h3>
          {expandedSections.learningPath ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.learningPath && (
          <div className="space-y-4 mt-4">
            {recommendation.learningPath.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-medium">{item.topic}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {item.resources && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-700">Resources:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {item.resources.map((resource, i) => (
                        <li key={i}>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {resource.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mb-8">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('timeline')}
        >
          <h3 className="text-lg font-semibold flex items-center">
            <FaCalendarAlt className="mr-2 text-blue-500" />
            Study Timeline
          </h3>
          {expandedSections.timeline ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.timeline && (
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <ul className="space-y-3">
              {recommendation.timeline.map((item, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{item.week}</p>
                    <p className="text-gray-600 text-sm">{item.tasks}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('additionalTips')}
        >
          <h3 className="text-lg font-semibold flex items-center">
            <FaLightbulb className="mr-2 text-blue-500" />
            Additional Tips
          </h3>
          {expandedSections.additionalTips ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.additionalTips && (
          <ul className="list-disc list-inside bg-yellow-50 p-4 rounded-lg space-y-2 mt-4">
            {recommendation.additionalTips.map((tip, index) => (
              <li key={index} className="text-gray-700">{tip}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecommendationResult;