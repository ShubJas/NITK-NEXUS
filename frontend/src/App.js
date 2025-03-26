// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import RoadmapPage from "./pages/RoadmapPage";
import HigherStudies from "./pages/HigherStudies";
import CourseTracker from "./pages/CourseTracker";
import CoursePage from "./pages/CoursePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/courses/:courseCode" element={<CoursePage />}></Route>
        <Route path="/roadmap" element={<RoadmapPage />}></Route>
        <Route path="/course-tracker" element={<CourseTracker />}></Route>
        <Route path="/higher-studies" element={<HigherStudies />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
