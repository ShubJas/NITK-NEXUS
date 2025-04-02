import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Custom Card Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);

const ProgressCircle = ({ progress }) => {
  return (
    <div className="relative w-20 h-20 mr-4">
      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#edf2f7"
          strokeWidth="2"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray={`${progress}, 100`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-semibold text-blue-500">{progress}%</span>
      </div>
    </div>
  );
};

const ResourceCard = ({ resource }) => (
  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
    <div className="flex items-start">
      {resource.thumbnail && (
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-16 h-16 object-cover rounded mr-4"
        />
      )}
      <div>
        <h4 className="font-medium">{resource.title}</h4>
        <p className="text-sm text-gray-500 mb-2 capitalize">{resource.type}</p>
        {resource.duration && (
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {resource.duration}
          </span>
        )}
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-500 text-sm"
        >
          View Resource
        </a>
      </div>
    </div>
  </div>
);

const CoursePage = () => {
  const { courseCode } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTc5ZmRhMGVmOWVmODc2ZjMyOWE4MCIsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJyb2xsTm8iOiJDUzEwMSIsImlhdCI6MTc0MzIzNDQ4MCwiZXhwIjoxNzQzODM5MjgwfQ.A6XI9-GIBMMh1RyL38zghFVd_9NZ7yfsQKW0GYsbPuA";
        if (!token) {
          console.log("No authentication token found. Please log in.");
          return;
        }
        const response = await axios.get(
          `http://localhost:8000/api/v1/courses/code/${courseCode}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Attach token to request
            },
          }
        );
        setCourse(response.data.course);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseCode]);

  useEffect(() => {
    function updateCountdown() {
      if (!course) return;

      const midtermDate = new Date(course.midtermExam.date);
      const finalDate = new Date(course.finalExam.date);
      const now = new Date();
      const midtermDays = Math.ceil(
        (midtermDate - now) / (1000 * 60 * 60 * 24)
      );
      const finalDays = Math.ceil((finalDate - now) / (1000 * 60 * 60 * 24));

      const midtermEl = document.getElementById("midterm-countdown");
      const finalEl = document.getElementById("final-countdown");
      if (midtermEl)
        midtermEl.textContent =
          midtermDays > 0 ? `${midtermDays} days remaining` : "Completed";
      if (finalEl)
        finalEl.textContent =
          finalDays > 0 ? `${finalDays} days remaining` : "Completed";
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [course]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  if (!course) return <div className="text-center py-20">Course not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{course.title} - NITK Nexus</title>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Course Header */}
          <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {course.courseCode}: {course.title}
                </h1>
                <div className="mt-2 flex flex-wrap items-center text-sm text-gray-600">
                  <span className="flex items-center mr-4">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {course.semester}
                  </span>
                  <span className="flex items-center mr-4">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    {course.department}
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {course.creditHours} Credit Hours
                  </span>
                </div>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <button className="flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Syllabus
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {[
                "overview",
                "schedule",
                "assignments",
                "resources",
                "exams",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2">
                  {/* Course Description */}
                  <Card className="p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      Course Description
                    </h2>
                    <p className="text-gray-700">{course.description}</p>
                  </Card>

                  {/* Learning Outcomes */}
                  <Card className="p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      Learning Outcomes
                    </h2>
                    <ul className="space-y-3">
                      {course.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Prerequisites */}
                  {course.prerequisites.length > 0 && (
                    <Card className="p-6 mb-8">
                      <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Prerequisites
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {course.prerequisites.map((prereq, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                          >
                            {prereq}
                          </span>
                        ))}
                      </div>
                    </Card>
                  )}

                  {/* Textbooks */}
                  {course.textbooks.length > 0 && (
                    <Card className="p-6">
                      <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Textbooks & Resources
                      </h2>
                      <div className="space-y-4">
                        {course.textbooks.map((book, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-blue-500 pl-4 py-2"
                          >
                            <h3 className="font-medium text-gray-800">
                              {book.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              by {book.author}
                            </p>
                            {book.link && (
                              <a
                                href={book.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 text-sm inline-flex items-center mt-1"
                              >
                                View Book
                                <svg
                                  className="w-4 h-4 ml-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </Card>
                  )}
                </div>

                {/* Right Column */}
                <div>
                  {/* Instructor Info */}
                  <Card className="p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      Instructor
                    </h2>
                    <div className="flex items-start">
                      {course.instructor.imageUrl && (
                        <img
                          src={course.instructor.imageUrl}
                          alt={course.instructor.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                      )}
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {course.instructor.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {course.instructor.title}
                        </p>
                        <div className="mt-3 space-y-2">
                          {course.instructor.email && (
                            <div className="flex items-center text-sm text-gray-600">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                              {course.instructor.email}
                            </div>
                          )}
                          {course.instructor.phone && (
                            <div className="flex items-center text-sm text-gray-600">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                              {course.instructor.phone}
                            </div>
                          )}
                          {course.instructor.officeHours && (
                            <div className="flex items-center text-sm text-gray-600">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                />
                              </svg>
                              Office Hours: {course.instructor.officeHours}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Course Details */}
                  <Card className="p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      Course Details
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">
                          Schedule
                        </h3>
                        <p className="text-gray-700">{course.schedule}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">
                          Location
                        </h3>
                        <p className="text-gray-700">{course.location}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Progress */}
                  <Card className="p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      Your Progress
                    </h2>
                    <div className="flex items-center">
                      <ProgressCircle progress={course.progress} />
                      <div>
                        <p className="font-medium">Overall Completion</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Track your progress through assignments and materials
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Assessment */}
                  <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      Assessment Breakdown
                    </h2>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Assignments</span>
                          <span className="font-medium">
                            {course.assessment.assignments}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{
                              width: `${course.assessment.assignments}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Midterm Exam</span>
                          <span className="font-medium">
                            {course.assessment.midterm}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${course.assessment.midterm}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Final Exam</span>
                          <span className="font-medium">
                            {course.assessment.final}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: `${course.assessment.final}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Weekly Schedule
                </h2>
                <div className="space-y-6">
                  {course.weeklySchedule.map((week) => (
                    <Card key={week.weekNumber} className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800">
                            Week {week.weekNumber}: {week.title}
                          </h3>
                          <span
                            className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
                              week.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : week.status === "in-progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {week.status.replace("-", " ")}
                          </span>
                        </div>
                        <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                          View Details
                        </button>
                      </div>

                      {week.topics.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-500 mb-2">
                            Topics Covered:
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {week.topics.map((topic, index) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {week.resources.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-500 mb-2">
                            Resources:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {week.resources.map((resource, index) => (
                              <a
                                key={index}
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border rounded-lg p-3 hover:shadow-md transition-shadow flex items-start"
                              >
                                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                                  {resource.type === "video" && (
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  )}
                                  {resource.type === "reading" && (
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                      />
                                    </svg>
                                  )}
                                  {resource.type === "slides" && (
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                      />
                                    </svg>
                                  )}
                                </div>
                                <div>
                                  <h5 className="font-medium text-gray-800">
                                    {resource.title}
                                  </h5>
                                  <p className="text-xs text-gray-500 mt-1 capitalize">
                                    {resource.type}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "assignments" && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Assignments
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Assignment
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Due Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Grade
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {course.assignments.map((assignment) => (
                        <tr key={assignment.number}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg
                                  className="h-6 w-6 text-blue-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {assignment.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                  #{assignment.number}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {new Date(
                                assignment.dueDate
                              ).toLocaleDateString()}
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(assignment.dueDate).toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                assignment.status === "submitted"
                                  ? "bg-green-100 text-green-800"
                                  : assignment.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {assignment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {assignment.grade !== undefined
                              ? `${assignment.grade}%`
                              : "-"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-500 hover:text-blue-700 mr-3">
                              View
                            </button>
                            <button className="text-indigo-500 hover:text-indigo-700">
                              Submit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "resources" && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Course Resources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {course.resources.map((resource, index) => (
                    <ResourceCard key={index} resource={resource} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "exams" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Midterm Exam */}
                <Card className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Midterm Exam
                    </h2>
                    <span
                      id="midterm-countdown"
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      Loading...
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Date
                      </h3>
                      <p className="text-gray-700">
                        {new Date(course.midtermExam.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Time
                      </h3>
                      <p className="text-gray-700">{course.midtermExam.time}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Venue
                      </h3>
                      <p className="text-gray-700">
                        {course.midtermExam.venue}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Weightage
                      </h3>
                      <p className="text-gray-700">
                        {course.assessment.midterm}% of final grade
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Final Exam */}
                <Card className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Final Exam
                    </h2>
                    <span
                      id="final-countdown"
                      className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                    >
                      Loading...
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Date
                      </h3>
                      <p className="text-gray-700">
                        {new Date(course.finalExam.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Time
                      </h3>
                      <p className="text-gray-700">{course.finalExam.time}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Venue
                      </h3>
                      <p className="text-gray-700">{course.finalExam.venue}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Weightage
                      </h3>
                      <p className="text-gray-700">
                        {course.assessment.final}% of final grade
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Exam Resources */}
                <div className="md:col-span-2">
                  <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                      Exam Preparation Resources
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <a
                        href="#"
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow flex items-center"
                      >
                        <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Past Papers</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            5 years of previous exams
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow flex items-center"
                      >
                        <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Study Guide</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Key topics and concepts
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow flex items-center"
                      >
                        <div className="bg-purple-100 text-purple-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">FAQ</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Common questions answered
                          </p>
                        </div>
                      </a>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
