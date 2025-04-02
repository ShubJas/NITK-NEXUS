import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar_ct";
import Footer from "../components/Footer";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getStartDay(year, month) {
  return new Date(year, month, 1).getDay();
}

const CourseTracker = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [token, setToken] = useState("");

  const [currentDate, setCurrentDate] = React.useState(new Date());

  const today = new Date();

  const isToday = (day) => {
    return (
      day &&
      today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };

  const events = [
    {
      date: new Date(2025, 2, 14),
      title: "EC201 Mid-Sem Exam",
      color: "bg-red-500",
    },
    {
      date: new Date(2025, 2, 16),
      title: "CS201 Mid-Sem Exam",
      color: "bg-green-500",
    },
    {
      date: new Date(2025, 2, 19),
      title: "MA202 Mid-Sem Exam",
      color: "bg-yellow-500",
    },
    {
      date: new Date(2025, 2, 23),
      title: "Lab Submissions Due",
      color: "bg-indigo-500",
    },
  ];

  const getEventForDay = (day) => {
    return events.find(
      (event) =>
        day &&
        event.date.getDate() === day &&
        event.date.getMonth() === currentDate.getMonth() &&
        event.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonth);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const startDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    for (let d = 1; d <= numDays; d++) {
      days.push(d);
    }
    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = getDaysInMonth(currentDate);

  const getStudentCourses = async () => {
    try {
      const rollNo = "211IT012";

      // Retrieve the auth token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No authentication token found. Please log in.");
        return;
      }

      // Send request with Authorization header
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/students/${rollNo}/courses`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to request
          },
        }
      );

      setCourses(data?.data.courses);
    } catch (err) {
      console.log("Error fetching Courses: ", err.message);
    }
  };

  useEffect(() => {
    getStudentCourses();
  }, []);
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NITK Nexus - Course Track</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".animate-shake{animation:shake 0.82s cubic-bezier(.36,.07,.19,.97) both}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}.shadow-glow { filter: drop-shadow(0 0 3px rgba(0, 123, 255, 0.5)); }",
          }}
        />
        <div id="dashboard"></div>
        <Navbar />
        <main className="pt-28 pb-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                📚 Explore Your Semester Roadmap
              </h1>
              <p className="text-xl text-gray-600">
                Track your progress semester-by-semester and ace every subject
              </p>
            </div>
            <div className="mb-16 relative">
              <div className="flex space-x-6 overflow-x-auto pb-6 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 snap-x snap-mandatory">
                <div className="flex-none w-80">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Semester 1</h3>
                      <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        Completed
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Credits</span>
                        <span className="font-medium">24/24</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-custom h-2 bg-blue-500 rounded-full opacity-70"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-80">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Semester 2</h3>
                      <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                        In Progress
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Credits</span>
                        <span className="font-medium">16/24</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-custom h-2 bg-blue-500 rounded-full opacity-70"
                          style={{ width: "66%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-80">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Semester 3</h3>
                      <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        Upcoming
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Credits</span>
                        <span className="font-medium">0/24</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-custom h-2 rounded-full opacity-70"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-80">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Semester 4</h3>
                      <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        Upcoming
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Credits</span>
                        <span className="font-medium">0/24</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-custom h-2 rounded-full opacity-70"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-80">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Semester 5</h3>
                      <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        Upcoming
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Credits</span>
                        <span className="font-medium">0/24</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-custom h-2 rounded-full opacity-70"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-80">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Semester 6</h3>
                      <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        Upcoming
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Credits</span>
                        <span className="font-medium">0/24</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-custom h-2 rounded-full opacity-70"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-80">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Semester 7</h3>
                      <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        Upcoming
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Credits</span>
                        <span className="font-medium">0/24</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-custom h-2 rounded-full opacity-70"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-80">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Semester 8</h3>
                      <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        Upcoming
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Credits</span>
                        <span className="font-medium">0/24</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-custom h-2 rounded-full opacity-70"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="courses"
              className="bg-gray-50 rounded-lg shadow-sm p-8 mb-16"
            >
              <h2 className="text-2xl font-semibold mb-6">
                Current Semester Subjects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-6">
                {courses.map((course, index) => {
                  // Example progress circle calculation
                  const circumference = 175.9;
                  const offset =
                    circumference -
                    circumference * (course.courseProgress / 100);

                  return (
                    <div
                      key={index}
                      onClick={() =>
                        navigate(`/courses/code/${course.courseCode}`)
                      }
                      className="border border-gray-200 rounded-lg p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]
                         bg-gradient-to-br from-green-50 to-gray-50 hover:scale-105 
                         transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">
                          {course.courseCode}: {course.courseName}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {course.courseCredits} Credits
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        {/* If you have a description field, use it here */}
                        {course.courseDescription || "No description provided."}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="fas fa-clock mr-2" />
                          <span>Progress: {course.courseProgress}%</span>
                        </div>
                        <div className="relative w-16 h-16">
                          <svg className="transform -rotate-90 w-16 h-16">
                            <circle
                              cx={32}
                              cy={32}
                              r={28}
                              stroke="#eee"
                              strokeWidth={4}
                              fill="none"
                            />
                            <circle
                              cx={32}
                              cy={32}
                              r={28}
                              stroke="#007BFF"
                              strokeWidth={4}
                              fill="none"
                              strokeDasharray={circumference}
                              strokeDashoffset={offset}
                              className="transition-all duration-1000 shadow-glow"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                id="community"
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                style={{ order: 1 }}
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  💬 Community Forum
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">
                    Join the discussion with your peers:
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 relative">
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 relative">
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 relative">
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-400 border-2 border-white rounded-full" />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                        +5
                      </div>
                    </div>
                    <span className="text-green-500 font-medium ml-2">
                      8 active discussions
                    </span>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white rounded-lg py-3 px-4 font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 animate-pulse hover:animate-none">
                  Enter Forum
                </button>
              </div>
              <div
                id="subjectModal"
                className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden"
              >
                <div className="bg-white rounded-lg max-w-4xl mx-auto mt-20 p-8 relative max-h-[80vh] overflow-y-auto">
                  <button
                    id="closeModal"
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  >
                    <i className="fas fa-times text-xl" />
                  </button>
                  <div className="flex items-center mb-8">
                    <i className="fas fa-book-open text-4xl text-custom mr-4" />
                    <h2 className="text-3xl font-bold text-gray-900" />
                  </div>
                  <div className="border-b border-gray-200 mb-6">
                    <div className="flex space-x-6">
                      <button className="tab-btn px-4 py-2 text-gray-600 border-b-2 border-transparent hover:text-custom transition-colors duration-300 active">
                        Overview
                      </button>
                      <button className="tab-btn px-4 py-2 text-gray-600 border-b-2 border-transparent hover:text-custom transition-colors duration-300">
                        Study Materials
                      </button>
                      <button className="tab-btn px-4 py-2 text-gray-600 border-b-2 border-transparent hover:text-custom transition-colors duration-300">
                        Practice Tests
                      </button>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane active">
                      <p className="text-gray-600 mb-6" />
                      <div className="bg-gray-100 rounded-full h-4 mb-8">
                        <div
                          className="bg-custom h-4 rounded-full transition-all duration-1000"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                    <div className="tab-pane hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg hover:scale-105 transition-transform cursor-pointer">
                          <h3 className="font-semibold mb-2">
                            📚 Lecture Notes
                          </h3>
                          <p className="text-sm text-gray-600">
                            Comprehensive chapter-wise notes
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg hover:scale-105 transition-transform cursor-pointer">
                          <h3 className="font-semibold mb-2">
                            📖 Reference Books
                          </h3>
                          <p className="text-sm text-gray-600">
                            Recommended textbooks and references
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg hover:scale-105 transition-transform cursor-pointer">
                          <h3 className="font-semibold mb-2">
                            🎥 Video Tutorials
                          </h3>
                          <p className="text-sm text-gray-600">
                            Visual learning resources
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane hidden">
                      <div className="space-y-4">
                        <button className="w-full py-3 px-4 bg-custom text-white rounded-lg hover:animate-shake transition-all">
                          Mock Test 1
                        </button>
                        <button className="w-full py-3 px-4 bg-custom text-white rounded-lg hover:animate-shake transition-all">
                          Mock Test 2
                        </button>
                        <button className="w-full py-3 px-4 bg-custom text-white rounded-lg hover:animate-shake transition-all">
                          Mock Test 3
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="calendar"
              className="bg-gray-50 rounded-lg shadow-sm p-8 mb-16"
              style={{ order: 0 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Semester Timeline</h2>
              <div className="relative mb-8">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-2 bg-blue-500 bg-custom rounded-full transition-all duration-1000"
                    style={{ width: "45%" }}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div className="group relative cursor-pointer">
                    <div className="w-8 h-8 bg-custom rounded-full flex items-center justify-center bg-blue-500 text-white shadow-lg transform hover:scale-110 transition-all">
                      <i className="fas fa-calendar-plus" />
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-48">
                      <p className="text-sm text-center font-medium">
                        Day 30: Complete 2 Subjects
                      </p>
                    </div>
                  </div>
                  <div className="group relative cursor-pointer">
                    <div className="w-8 h-8 bg-custom rounded-full flex items-center justify-center  bg-blue-500 text-white shadow-lg transform hover:scale-110 transition-all">
                      <i className="fas fa-calendar-plus" />
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-48">
                      <p className="text-sm text-center font-medium">
                        Day 60: Mid-Sem Tests
                      </p>
                    </div>
                  </div>
                  <div className="group relative cursor-pointer">
                    <div className="w-8 h-8 bg-custom rounded-full flex items-center justify-center  bg-blue-500 text-white shadow-lg transform hover:scale-110 transition-all">
                      <i className="fas fa-calendar-plus" />
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-48">
                      <p className="text-sm text-center font-medium">
                        Day 90: Mock Exams
                      </p>
                    </div>
                  </div>
                  <div className="group relative cursor-pointer">
                    <div className="w-8 h-8 bg-custom rounded-full flex items-center justify-center  bg-blue-500 text-white shadow-lg transform hover:scale-110 transition-all">
                      <i className="fas fa-calendar-plus" />
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-48">
                      <p className="text-sm text-center font-medium">
                        Day 120: Finals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">
                    {monthNames[currentDate.getMonth()]}{" "}
                    {currentDate.getFullYear()}
                  </h3>

                  <div className="flex space-x-2">
                    <button
                      onClick={handlePrevMonth}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <i className="fas fa-chevron-left" />
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  <div className="text-gray-500">Sun</div>
                  <div className="text-gray-500">Mon</div>
                  <div className="text-gray-500">Tue</div>
                  <div className="text-gray-500">Wed</div>
                  <div className="text-gray-500">Thu</div>
                  <div className="text-gray-500">Fri</div>
                  <div className="text-gray-500">Sat</div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className={`p-2 text-center ${
                        day ? "" : "text-gray-400"
                      } ${
                        day
                          ? "hover:bg-blue-50 cursor-pointer rounded-md group relative"
                          : ""
                      }`}
                    >
                      {day && (
                        <>
                          <span
                            className={`inline-block ${
                              isToday(day)
                                ? "text-white bg-blue-500 rounded-full px-2 py-1 shadow-glow"
                                : ""
                            }`}
                          >
                            {day}
                          </span>

                          {getEventForDay(day) && (
                            <>
                              <div
                                className={`w-2 h-2 rounded-full absolute -top-1 -right-1 ${
                                  getEventForDay(day).color
                                }`}
                              />
                              <div className="absolute hidden group-hover:block z-10 bg-white p-2 rounded shadow-lg -translate-x-1/2 left-1/2 min-w-[200px] top-full mt-2 text-sm">
                                <p className="text-custom font-medium">
                                  {getEventForDay(day).title}
                                </p>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                      <span className="text-sm">CS201 Events</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
                      <span className="text-sm">MA202 Events</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2" />
                      <span className="text-sm">PH201 Events</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
                      <span className="text-sm">EC201 Events</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2" />
                      <span className="text-sm">Lab Sessions</span>
                    </div>
                    <div className="flex items-center font-medium">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 shadow-glow" />
                      <span className="text-sm font-medium text-custom">
                        Today
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default CourseTracker;
