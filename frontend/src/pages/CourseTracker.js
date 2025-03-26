import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const CourseTracker = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const getStudentCourses = async () => {
    try {
      const rollNo = "2021MECH001";
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/students/${rollNo}/courses`
      );
      setCourses(data?.courses);
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
        <header className="fixed top-0 left-0 right-0 bg-custom/30 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-start space-x-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
                  alt="NITK Nexus Logo"
                  className="h-10 w-10 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform"
                />
                <span className="text-gray-900 font-bold text-xl lg:text-2xl tracking-wide hover:text-gray-700 transition-colors">
                  NITK NEXUS
                </span>
                <nav className="hidden md:flex items-center space-x-12 backdrop-blur-sm">
                  <a
                    href="#"
                    className="text-custom font-medium transition-colors flex-1 text-center hover:opacity-80"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="text-custom font-medium transition-colors flex-1 text-center hover:opacity-80"
                  >
                    Courses
                  </a>
                  <a
                    href="#"
                    className="text-custom font-medium transition-colors flex-1 text-center hover:opacity-80"
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    className="text-custom font-medium transition-colors flex-1 text-center hover:opacity-80"
                  >
                    Community
                  </a>
                </nav>
              </div>
              <button className="hidden lg:flex order-3 rounded-full bg-white text-custom w-10 h-10 items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 ml-auto mr-4">
                <i className="fas fa-home text-sm" />
              </button>
              <div className="flex items-center space-x-4">
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <i className="fas fa-bell text-white" />
                </button>
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <i className="fas fa-user text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>
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
            <div className="bg-gray-50 rounded-lg shadow-sm p-8 mb-16">
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
                        navigate(
                          "/" +
                            course.courseId.toLowerCase().replace(/\s/g, "-")
                        )
                      }
                      className="border border-gray-200 rounded-lg p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]
                         bg-gradient-to-br from-green-50 to-gray-50 hover:scale-105 
                         transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">
                          {course.courseId}: {course.courseName}
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
              {/* ... Your Community Forum code, modal, etc. can go here ... */}
            </div>
            <div
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
                  <h3 className="text-xl font-semibold">February 2025</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <i className="fas fa-chevron-left" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
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
                  <div className="p-2 text-gray-400">28</div>
                  <div className="p-2">29</div>
                  <div className="p-2">30</div>
                  <div className="p-2">31</div>
                  <div className="p-2 relative group bg-green-50">1</div>
                  <div className="p-2">2</div>
                  <div className="p-2">3</div>
                  <div className="p-2">4</div>
                  <div className="p-2 relative group bg-blue-50">5</div>
                  <div className="p-2">6</div>
                  <div className="p-2">7</div>
                  <div className="p-2 relative group bg-purple-50">8</div>
                  <div className="p-2">12</div>
                  <div className="p-2">13</div>
                  <div className="p-2 relative group bg-red-50">
                    <span>14</span>
                    <div className="absolute hidden group-hover:block z-10 bg-white p-2 rounded shadow-lg -translate-x-1/2 left-1/2 min-w-[200px]">
                      <p className="text-custom font-medium">
                        EC201 Mid-Sem Exam
                      </p>
                    </div>
                    <div className="w-2 h-2 bg-red-500 rounded-full absolute -top-1 -right-1" />
                  </div>
                  <div className="p-2">15</div>
                  <div className="p-2 relative group bg-green-50">
                    <span>16</span>
                    <div className="absolute hidden group-hover:block z-10 bg-white p-2 rounded shadow-lg -translate-x-1/2 left-1/2 min-w-[200px]">
                      <p className="text-custom font-medium">
                        CS201 Mid-Sem Exam
                      </p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full absolute -top-1 -right-1" />
                  </div>
                  <div className="p-2">17</div>
                  <div className="p-2">18</div>
                  <div className="p-2 relative group bg-blue-50">
                    <span>19</span>
                    <div className="absolute hidden group-hover:block z-10 bg-white p-2 rounded shadow-lg -translate-x-1/2 left-1/2 min-w-[200px]">
                      <p className="text-custom font-medium">
                        MA202 Mid-Sem Exam
                      </p>
                    </div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full absolute -top-1 -right-1" />
                  </div>
                  <div className="p-2">20</div>
                  <div className="p-2">21</div>
                  <div className="p-2">22</div>
                  <div className="p-2 relative group bg-indigo-50">
                    <span>23</span>
                    <div className="absolute hidden group-hover:block z-10 bg-white p-2 rounded shadow-lg -translate-x-1/2 left-1/2 min-w-[200px]">
                      <p className="text-custom font-medium">
                        Lab Submissions Due
                      </p>
                    </div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full absolute -top-1 -right-1" />
                  </div>
                  <div className="p-2">24</div>
                  <div className="p-2">25</div>
                  <div className="p-2">26</div>
                  <div className="p-2">27</div>
                  <div className="p-2">28</div>
                  <div className="p-2">29</div>
                  <div className="p-2">30</div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                      <span className="text-sm">CS201 Events</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
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
                      <div className="w-3 h-3 bg-custom rounded-full mr-2 shadow-glow" />
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
        <footer className="bg-gradient-to-b from-custom/10 to-white py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-4">About NITK Nexus</h3>
                <p className="text-gray-400 text-sm">
                  Your comprehensive academic tracking platform for a successful
                  educational journey.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-custom transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-custom transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-custom transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Resources
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-custom transition-colors">
                      Study Materials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-custom transition-colors">
                      Career Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-custom transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Connect with Us
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-custom transition-colors"
                  >
                    <i className="fab fa-linkedin text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-custom transition-colors"
                  >
                    <i className="fab fa-twitter text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-custom transition-colors"
                  >
                    <i className="fab fa-instagram text-xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
              © 2025 NITK Nexus | Built by NITK Students for NITK Students
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CourseTracker;
