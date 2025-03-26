// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DataStructuresPage from "./pages/DataStructuresPage";
import LandingPage from "./pages/LandingPage";
import RoadmapPage from "./pages/RoadmapPage";
import HigherStudies from "./pages/HigherStudies";
import CourseTracker from "./pages/CourseTracker";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/data-structure" element={<DataStructuresPage />}></Route>
        <Route path="/roadmap" element={<RoadmapPage />}></Route>
        <Route path="/course-tracker" element={<CourseTracker />}></Route>
        <Route path="/higher-studies" element={<HigherStudies />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
