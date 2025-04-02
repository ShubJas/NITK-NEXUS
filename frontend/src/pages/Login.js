import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaLock,
  FaEnvelope,
  FaIdCard,
  FaBook,
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoMdArrowDropdown, IoMdCheckmark } from "react-icons/io";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import axios from "axios";

// Enhanced course data with departments and credits
const COURSES = {
  CS101: {
    name: "Introduction to Programming",
    credits: 4,
    department: "Computer Science",
  },
  CS201: {
    name: "Data Structures",
    credits: 4,
    department: "Computer Science",
  },
  CS301: { name: "Algorithms", credits: 4, department: "Computer Science" },
  CS401: {
    name: "Database Systems",
    credits: 3,
    department: "Computer Science",
  },
  CS501: {
    name: "Operating Systems",
    credits: 4,
    department: "Computer Science",
  },
  CS601: {
    name: "Machine Learning",
    credits: 3,
    department: "Computer Science",
  },
  CS701: {
    name: "Artificial Intelligence",
    credits: 3,
    department: "Computer Science",
  },
  CS801: {
    name: "Cloud Computing",
    credits: 3,
    department: "Computer Science",
  },
  EE101: { name: "Basic Electronics", credits: 4, department: "Electrical" },
  EE201: { name: "Digital Systems", credits: 4, department: "Electrical" },
  ME101: {
    name: "Engineering Mechanics",
    credits: 4,
    department: "Mechanical",
  },
  CE101: { name: "Engineering Drawing", credits: 3, department: "Civil" },
  MA101: { name: "Calculus", credits: 4, department: "Mathematics" },
  PH101: { name: "Physics", credits: 4, department: "Physics" },
  CH101: { name: "Chemistry", credits: 4, department: "Chemistry" },
};

const DEPARTMENTS = [
  "Computer Science",
  "Electrical",
  "Mechanical",
  "Civil",
  "Mathematics",
  "Physics",
  "Chemistry",
];

const FloatingElements = () => {
  const floatingElements = [
    {
      icon: "📚",
      size: "text-2xl",
      delay: 0.1,
      duration: 8,
      y: [0, 20, 0],
      opacity: [0.8, 1, 0.8],
    },
    {
      icon: "💻",
      size: "text-3xl",
      delay: 0.3,
      duration: 10,
      y: [10, -10, 10],
      opacity: [0.9, 1, 0.9],
    },
    {
      icon: "🧪",
      size: "text-2xl",
      delay: 0.5,
      duration: 12,
      y: [-5, 15, -5],
      opacity: [0.85, 1, 0.85],
    },
    {
      icon: "📝",
      size: "text-2xl",
      delay: 0.7,
      duration: 9,
      y: [15, -5, 15],
      opacity: [0.9, 1, 0.9],
    },
    {
      icon: "🔬",
      size: "text-3xl",
      delay: 0.2,
      duration: 11,
      y: [-10, 10, -10],
      opacity: [0.95, 1, 0.95],
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ y: element.y[0], opacity: 0 }}
          animate={{
            y: element.y,
            opacity: element.opacity,
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className={`absolute ${element.size} text-white/80`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            filter: "drop-shadow(0 0 4px rgba(255,255,255,0.3))",
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
};

const AnimatedGradientText = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [0, 10]);
  const rotateY = useTransform(x, [0, 1], [0, -10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        animate(x, 0.5, { duration: 0.5 });
        animate(y, 0.5, { duration: 0.5 });
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="relative inline-block"
    >
      <motion.span
        className="bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState("");
  const [rollNo, setrollNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [semester, setSemester] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateLogin = () => {
    const newErrors = {};
    if (!rollNo.match(/[0-9]{2}[A-Za-z]{2}[0-9]{3}/)) {
      newErrors.rollNo = "Format: YYBranchXXX (e.g. 21CS100)";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!email.match(/[a-zA-Z0-9._%+-]+@nitk\.edu\.in$/)) {
      newErrors.email = "Please use your NITK email address";
    }
    if (!rollNo.match(/[0-9]{2}[A-Za-z]{2}[0-9]{3}/)) {
      newErrors.rollNo = "Format: YYBranchXXX (e.g. 21CS100)";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!semester) {
      newErrors.semester = "Please select your semester";
    }
    if (!department) {
      newErrors.department = "Please select your department";
    }
    if (selectedCourses.length === 0) {
      newErrors.courses = "Please select at least one course";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    setIsLoading(true);
    try {
      const data = { rollNo, password };
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        data
      );
      console.log(response);
      if (response && response.data.success) {
        localStorage.setItem("key", response.data.token);
        navigate("/");
      } else alert("Login failed");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateSignup()) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleCourseSelection = (courseCode) => {
    if (selectedCourses.includes(courseCode)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== courseCode));
    } else {
      setSelectedCourses([...selectedCourses, courseCode]);
    }
  };

  const filteredCourses = Object.entries(COURSES)
    .filter(
      ([code, course]) =>
        code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.department.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a[1].department.localeCompare(b[1].department));

  const totalCredits = selectedCourses.reduce(
    (sum, code) => sum + COURSES[code].credits,
    0
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Creative Branding Panel with Lighter Blue */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-blue-200 to-indigo-600 relative overflow-hidden">
        <FloatingElements />
        <div className="w-full flex flex-col items-center justify-center px-12 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-12 text-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
              alt="NITK Logo"
              className="w-32 mx-auto mb-6 drop-shadow-lg"
            />
            <h1 className="text-4xl font-bold mb-4">
              <AnimatedGradientText>NITK NEXUS</AnimatedGradientText>
            </h1>
            <motion.p
              className="text-white/80 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The Future of Academic Excellence
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                <FaUserGraduate className="text-white" />
              </div>
              <h3 className="text-white font-medium">Personalized Dashboard</h3>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center mr-3">
                <FaBook className="text-white" />
              </div>
              <h3 className="text-white font-medium">Course Management</h3>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                <FaUniversity className="text-white" />
              </div>
              <h3 className="text-white font-medium">Campus Resources</h3>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="inline-flex space-x-2">
              {["🔐", "🚀", "📊", "🎓"].map((emoji, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-2xl text-white/90"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login/Signup Form */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            {/* Tabs */}
            <div className="flex mb-8 border-b">
              <button
                onClick={() => setIsLoginView(true)}
                className={`flex-1 pb-4 text-center font-medium ${
                  isLoginView
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLoginView(false)}
                className={`flex-1 pb-4 text-center font-medium ${
                  !isLoginView
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign Up
              </button>
            </div>

            {isLoginView ? (
              // Login Form
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Roll Number
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                      <FaIdCard />
                    </span>
                    <input
                      type="text"
                      value={rollNo}
                      onChange={(e) => setrollNo(e.target.value)}
                      className={`w-full pl-12 rounded-lg border ${
                        errors.rollNo ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-500 focus:ring focus:ring-blue-200`}
                      placeholder="e.g. 21CS100"
                      required
                    />
                  </div>
                  {errors.rollNo && (
                    <p className="text-red-500 text-sm mt-1">{errors.rollNo}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                      <FaLock />
                    </span>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full pl-12 rounded-lg border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-500 focus:ring focus:ring-blue-200`}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none"
                  >
                    Forgot Password?
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex justify-center items-center"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </motion.button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
                    alt="NITK"
                    className="w-5 h-5 mr-2"
                  />
                  Login with NITK Credentials
                </button>
              </form>
            ) : (
              // Signup Form
              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    NITK Email
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-12 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-500 focus:ring focus:ring-blue-200`}
                      placeholder="your.email@nitk.edu.in"
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Roll Number
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                      <FaIdCard />
                    </span>
                    <input
                      type="text"
                      value={rollNo}
                      onChange={(e) => setrollNo(e.target.value)}
                      className={`w-full pl-12 rounded-lg border ${
                        errors.rollNo ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-500 focus:ring focus:ring-blue-200`}
                      placeholder="e.g. 21CS100"
                      required
                    />
                  </div>
                  {errors.rollNo && (
                    <p className="text-red-500 text-sm mt-1">{errors.rollNo}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                        <FaLock />
                      </span>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full pl-12 rounded-lg border ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        } focus:border-blue-500 focus:ring focus:ring-blue-200`}
                        placeholder="Create a password"
                        required
                      />
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                        <FaLock />
                      </span>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full pl-12 rounded-lg border ${
                          errors.confirmPassword
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:border-blue-500 focus:ring focus:ring-blue-200`}
                        placeholder="Confirm password"
                        required
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Semester
                    </label>
                    <select
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      className={`w-full rounded-lg border ${
                        errors.semester ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-500 focus:ring focus:ring-blue-200`}
                      required
                    >
                      <option value="">Select semester</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                        <option key={sem} value={sem}>
                          Sem {sem}
                        </option>
                      ))}
                    </select>
                    {errors.semester && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.semester}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className={`w-full rounded-lg border ${
                        errors.department ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-500 focus:ring focus:ring-blue-200`}
                      required
                    >
                      <option value="">Select department</option>
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                    {errors.department && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.department}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Courses ({selectedCourses.length} selected, {totalCredits}{" "}
                    credits)
                  </label>
                  <div
                    className={`w-full px-4 py-3 border ${
                      errors.courses ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 flex justify-between items-center cursor-pointer`}
                    onClick={() => setShowCourseDropdown(!showCourseDropdown)}
                  >
                    <span className="truncate">
                      {selectedCourses.length > 0
                        ? selectedCourses.map((code) => code).join(", ")
                        : "Select your courses"}
                    </span>
                    <IoMdArrowDropdown
                      className={`transition-transform ${
                        showCourseDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {errors.courses && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.courses}
                    </p>
                  )}
                  {showCourseDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      <div className="p-2 border-b sticky top-0 bg-white">
                        <input
                          type="text"
                          placeholder="Search courses..."
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <div className="divide-y">
                        {filteredCourses.length > 0 ? (
                          filteredCourses.map(([code, course]) => (
                            <div
                              key={code}
                              className={`p-3 hover:bg-blue-50 cursor-pointer flex items-start ${
                                selectedCourses.includes(code)
                                  ? "bg-blue-50"
                                  : ""
                              }`}
                              onClick={() => toggleCourseSelection(code)}
                            >
                              <div
                                className={`flex items-center justify-center w-5 h-5 mt-1 mr-3 border rounded ${
                                  selectedCourses.includes(code)
                                    ? "bg-blue-600 border-blue-600 text-white"
                                    : "border-gray-300"
                                }`}
                              >
                                {selectedCourses.includes(code) && (
                                  <IoMdCheckmark size={14} />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between">
                                  <p className="font-medium truncate">
                                    {course.name}
                                  </p>
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">
                                    {course.credits} CR
                                  </span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                  <span className="font-mono">{code}</span>
                                  <span>{course.department}</span>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-4 text-center text-gray-500">
                            No courses found matching your search
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {selectedCourses.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedCourses.map((code) => (
                        <span
                          key={code}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center"
                        >
                          {code}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCourseSelection(code);
                            }}
                            className="ml-1 text-blue-600 hover:text-blue-800 focus:outline-none"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 mr-2 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex justify-center items-center"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
