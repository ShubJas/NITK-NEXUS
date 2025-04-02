// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RoadmapPage from "./pages/RoadmapPage";
import HigherStudies from "./pages/HigherStudies";
import CourseTracker from "./pages/CourseTracker";
import CoursePage from "./pages/CoursePage";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/courses/code/:courseCode"
          element={<CoursePage />}
        ></Route>
        <Route path="/roadmap" element={<RoadmapPage />}></Route>
        <Route path="/course-tracker" element={<CourseTracker />}></Route>
        <Route path="/higher-studies" element={<HigherStudies />}></Route>
        <Route path="/login" element={<Login />}></Route>\
      </Routes>
    </Router>
  );
};

export default App;
