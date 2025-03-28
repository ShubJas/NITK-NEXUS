import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const HigherStudies = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("all");
  const [showMoreCS, setShowMoreCS] = useState(false);

  // State declarations
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [programFilter, setProgramFilter] = useState("");
  const [rankingFilter, setRankingFilter] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

  // Fetch universities from backend
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("/api/v1/universities");
        setUniversities(response.data.data); // Note the .data.data for our API structure
        setFilteredUniversities(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  // Enhanced search function
  const handleSearch = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();

      if (searchQuery) params.append("q", searchQuery);
      if (regionFilter) params.append("region", regionFilter);
      if (programFilter) params.append("program", programFilter);
      if (rankingFilter) params.append("ranking", rankingFilter);
      if (sortBy) params.append("sortBy", sortBy);

      const response = await axios.get(
        `/api/v1/universities/search?${params.toString()}`
      );
      setFilteredUniversities(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setRegionFilter("");
    setProgramFilter("");
    setRankingFilter("");
    setSortBy("relevance");
    setFilteredUniversities(universities);
  };

  // Auto-search when filters change
  useEffect(() => {
    handleSearch();
  }, [searchQuery, regionFilter, programFilter, rankingFilter, sortBy]);

  // Fetch universities from backend
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("/api/v1/universities");
        setUniversities(response.data.data); // Note the .data.data for our API structure
        setFilteredUniversities(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  // Sample data - you would replace with your actual data
  const csUniversities = [
    {
      id: 1,
      name: "MIT - Research Labs",
      url: "https://www.csail.mit.edu/",
      rank: "#1",
    },
    {
      id: 2,
      name: "Stanford - AI Research",
      url: "https://ai.stanford.edu/",
      rank: "#2",
    },
    {
      id: 3,
      name: "CMU - Robotics Institute",
      url: "https://www.ri.cmu.edu/",
      rank: "#3",
    },
  ];

  const businessUniversities = [
    {
      id: 4,
      name: "Harvard Business School",
      url: "https://www.hbs.edu/",
      rank: "#1",
    },
    {
      id: 5,
      name: "Wharton School",
      url: "https://www.wharton.upenn.edu/",
      rank: "#2",
    },
    { id: 6, name: "INSEAD", url: "https://www.insead.edu/", rank: "#3" },
  ];

  const engineeringUniversities = [
    { id: 7, name: "ETH Zurich", url: "https://ethz.ch/", rank: "#1" },
    {
      id: 8,
      name: "Imperial College London",
      url: "https://www.imperial.ac.uk/",
      rank: "#2",
    },
    {
      id: 9,
      name: "UC Berkeley",
      url: "https://www.berkeley.edu/",
      rank: "#3",
    },
  ];

  const moreCSUniversities = [
    {
      id: 10,
      name: "University of Washington",
      url: "https://www.washington.edu/",
    },
    { id: 11, name: "University of Toronto", url: "https://www.utoronto.ca/" },
  ];

  const handleSaveUniversity = (university) => {
    // Implement save to favorites functionality
    console.log("Saved university:", university);
    // You might want to add a toast notification here
  };

  // const handleSearch = () => {
  //   // Implement search functionality
  //   // This is a simplified version - you would need to implement actual filtering
  //   const results = [
  //     ...csUniversities,
  //     ...businessUniversities,
  //     ...engineeringUniversities,
  //   ];
  //   setFilteredUniversities(results);
  // };

  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Higher Studies Path - NITK Nexus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css"
          rel="stylesheet"
        />
        <nav className="fixed top-0 left-0 right-0 bg-custom/30 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-start space-x-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
                  alt="NITK Nexus Logo"
                  className="h-10 w-10 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform"
                />
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <button
                    onClick={() =>
                      document
                        .getElementById("home")
                        .scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="text-blue-500 border-b-2 border-blue-500 px-1 inline-flex items-center h-full text-sm font-medium cursor-pointer"
                  >
                    Home
                  </button>
                  <button
                    onClick={() =>
                      document
                        .getElementById("exams")
                        .scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="text-gray-500 hover:text-blue-500 px-1 inline-flex items-center h-full text-sm font-medium cursor-pointer"
                  >
                    Exams
                  </button>
                  <button
                    onClick={() =>
                      document
                        .getElementById("universities")
                        .scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="text-gray-500 hover:text-blue-500 px-1 inline-flex items-center h-full text-sm font-medium cursor-pointer"
                  >
                    Universities
                  </button>
                  <button
                    onClick={() =>
                      document
                        .getElementById("resources")
                        .scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="text-gray-500 hover:text-blue-500 px-1 inline-flex items-center h-full text-sm font-medium cursor-pointer"
                  >
                    Resources
                  </button>
                </div>
              </div>
              <button
                className="hidden lg:flex order-3 rounded-full bg-white text-custom w-10 h-10 items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 ml-auto mr-4"
                onClick={() => navigate("/")}
              >
                <i className="fas fa-home text-sm" />
              </button>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          <section className="relative bg-white overflow-hidden">
            <div className="max-w-8xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 text-center">
                  <div className="text-center flex-1">
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">
                          Transform Your Future with
                        </span>
                        <span className="block xl:inline text-blue-600">
                          &nbsp;Academic excellence
                        </span>
                      </h1>
                    </div>
                    <div className="mt-3 max-w-md mx-auto sm:flex sm:justify-center md:mt-5 md:text-lg md:max-w-3xl">
                      <p>
                        <span className="text-lg font-medium text-gray-700">
                          Ready to take the next step in your academic journey?
                        </span>
                        <br />
                        <span className="text-base text-gray-500 mt-2 block">
                          Join thousands of successful students who have
                          achieved their dreams through our expert guidance,
                          personalized roadmaps, and comprehensive resources.
                        </span>
                      </p>
                    </div>
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <div className="relative group">
                        <button
                          onClick={() =>
                            document.getElementById("exams").scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            })
                          }
                          className="!rounded-button w-64 flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                          <i className="fas fa-rocket mr-2" /> Start Your
                          Journey
                        </button>
                      </div>
                      <div className="relative group">
                        <button
                          onClick={() =>
                            document
                              .getElementById("resources")
                              .scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              })
                          }
                          className="!rounded-button w-64 flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-lg font-medium text-blue-500 bg-white hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm cursor-pointer"
                        >
                          <i className="fas fa-book-reader mr-2" /> Explore
                          Resources
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="exams" className="py-12 bg-gray-50">
            {/* <section className="py-8 bg-white border-b">
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-grow">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search Exams, Universities, or Scholarships…"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-blue-500"
                      />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-blue-500">
                      <option>All Exam Types</option>
                      <option>GRE</option>
                      <option>GATE</option>
                      <option>TOEFL</option>
                      <option>IELTS</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-blue-500">
                      <option>All Fields of Study</option>
                      <option>Computer Science</option>
                      <option>Mechanical Engineering</option>
                      <option>Business Administration</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-custom focus:border-blue-500">
                      <option>All Regions</option>
                      <option>US</option>
                      <option>Europe</option>
                      <option>Asia</option>
                      <option>Australia</option>
                    </select>
                  </div>
                </div>
              </div>
            </section> */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Popular Entrance Exams
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Prepare for your target exams with comprehensive study
                  materials and guidance.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-graduation-cap text-2xl text-blue-500" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          GRE
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Graduate Record Examination
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <i className="far fa-calendar mr-2" />
                        <span>Next Test Date: June 15, 2024</span>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <i className="far fa-clock mr-2" />
                        <span>Duration: 3 hours 45 minutes</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <a
                        href="https://www.youtube.com/watch?v=Ex-3Vlb9IrE&ab_channel=BharatinGermany%21"
                        className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                      >
                        <i className="fas fa-file-pdf mr-2" /> GRE 3-Month Study
                        Plan
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=E_GSkiaMnx4&list=PL0BE1A07536688372&ab_channel=MagooshTestPrepforGRE"
                        className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                      >
                        <i className="fab fa-youtube mr-2" /> Magoosh GRE
                        Playlist
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=E_GSkiaMnx4&list=PL0BE1A07536688372&ab_channel=MagooshTestPrepforGRE"
                        className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                      >
                        <i className="fab fa-youtube mr-2" /> GRE Vocab YouTube
                        Series
                      </a>
                      <div className="flex items-center justify-between mt-2">
                        <button className="!rounded-button bg-green-500 text-white px-3 py-1 text-xs hover:bg-green-600">
                          <i className="fas fa-check mr-1" />
                          Mark as Completed
                        </button>
                        <button className="!rounded-button bg-blue-500 text-white px-3 py-1 text-xs hover:bg-blue-600">
                          <i className="fas fa-bookmark mr-1" />
                          Save for Later
                        </button>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center">
                          <div className="text-yellow-400">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <span className="ml-2 text-sm text-gray-500">
                            (245 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://www.ets.org/gre"
                      className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-book text-2xl text-blue-500" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          GATE
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Graduate Aptitude Test in Engineering
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <i className="far fa-calendar mr-2" />
                        <span>Next Test Date: February 3, 2024</span>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <i className="far fa-clock mr-2" />
                        <span>Duration: 3 hours</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <a
                        href="https://gate.iitk.ac.in/"
                        className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                      >
                        <i className="fas fa-file-pdf mr-2" /> Download GATE CSE
                        Study Plan (PDF)
                      </a>
                      <a
                        href="https://www.youtube.com/c/GateAcademy"
                        className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                      >
                        <i className="fab fa-youtube mr-2" /> GATE Academy
                        YouTube Channel
                      </a>
                      <a
                        href="https://nptel.ac.in/courses/106105151"
                        className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                      >
                        <i className="fab fa-youtube mr-2" /> NPTEL Operating
                        Systems
                      </a>
                      <div className="flex items-center justify-between mt-2">
                        <button className="!rounded-button bg-green-500 text-white px-3 py-1 text-xs hover:bg-green-600">
                          <i className="fas fa-check mr-1" />
                          Mark as Completed
                        </button>
                        <button className="!rounded-button bg-blue-500 text-white px-3 py-1 text-xs hover:bg-blue-600">
                          <i className="fas fa-bookmark mr-1" />
                          Save for Later
                        </button>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center">
                          <div className="text-yellow-400">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                          </div>
                          <span className="ml-2 text-sm text-gray-500">
                            (189 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://gate.iitk.ac.in/"
                      className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-language text-2xl text-blue-500" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          TOEFL
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Test of English as a Foreign Language
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <i className="far fa-calendar mr-2" />
                        <span>Multiple dates available</span>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <i className="far fa-clock mr-2" />
                        <span>Duration: 3 hours</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <a
                        href="https://www.ets.org/toefl/test-takers/ibt/prepare/"
                        className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                      >
                        <i className="fas fa-file-pdf mr-2" /> Download TOEFL
                        Strategy Guide (PDF)
                      </a>
                      <a
                        href="https://www.youtube.com/c/TOEFLtv"
                        className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                      >
                        <i className="fab fa-youtube mr-2" /> ETS Official TOEFL
                        Playlist
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=E_GSkiaMnx4&list=PL0BE1A07536688372&ab_channel=MagooshTestPrepforGRE"
                        className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                      >
                        <i className="fab fa-youtube mr-2" /> TOEFL Writing
                        Practice
                      </a>
                      <div className="flex items-center justify-between mt-2">
                        <button className="!rounded-button bg-green-500 text-white px-3 py-1 text-xs hover:bg-green-600">
                          <i className="fas fa-check mr-1" />
                          Mark as Completed
                        </button>
                        <button className="!rounded-button bg-blue-500 text-white px-3 py-1 text-xs hover:bg-blue-600">
                          <i className="fas fa-bookmark mr-1" />
                          Save for Later
                        </button>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center">
                          <div className="text-yellow-400">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span className="ml-2 text-sm text-gray-500">
                            (312 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://www.ets.org/toefl"
                      className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="universities" className="py-12 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Top Universities
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Explore top universities worldwide and find your perfect fit.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Top Universities for MS in Computer Science
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-2">🌍</span>
                        <a
                          href="https://www.csail.mit.edu/"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          MIT - Research Labs
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🌍</span>
                        <a
                          href="https://ai.stanford.edu/"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Stanford - AI Research
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🌍</span>
                        <a
                          href="https://www.ri.cmu.edu/"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          CMU - Robotics Institute
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Top Universities for MBA
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-2">🌍</span>
                        <a
                          href="https://www.hbs.edu/"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Harvard Business School
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🌍</span>
                        <a
                          href="https://www.wharton.upenn.edu/"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Wharton School
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🌍</span>
                        <a
                          href="https://www.insead.edu/"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          INSEAD
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/support-forums-api/attachment/thread-3360561-4772213659952246581.jpg"
                  alt="World Map"
                  className="w-full h-96 object-cover rounded-lg"
                  style={{ marginTop: "2rem" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
                <div className="absolute top-8 left-8 bg-white p-6 rounded-lg shadow-lg max-w-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    University Search
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Search universities..."
                      className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-blue-500"
                    />
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-blue-500">
                      <option>All Regions</option>
                      <option>North America</option>
                      <option>Europe</option>
                      <option>Asia</option>
                      <option>Australia</option>
                    </select>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-blue-500">
                      <option>All Programs</option>
                      <option>Computer Science</option>
                      <option>Engineering</option>
                      <option>Business</option>
                      <option>Sciences</option>
                    </select>
                    <a
                      href="https://www.topuniversities.com/university-rankings"
                      className="!rounded-button w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center"
                    >
                      Search Universities
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 bg-gray-50">
            <section className="py-12 bg-white">
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Top Universities
                  </h2>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Explore top universities worldwide and find your perfect
                    fit.
                  </p>

                  {/* University Filter Tabs */}
                  <div className="flex justify-center mt-8 mb-6">
                    <div className="inline-flex rounded-md shadow-sm">
                      <button
                        className="px-4 py-2 text-sm font-medium rounded-l-lg bg-blue-500 text-white"
                        onClick={() => setActiveTab("all")}
                      >
                        All Universities
                      </button>
                      <button
                        className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200"
                        onClick={() => setActiveTab("cs")}
                      >
                        Computer Science
                      </button>
                      <button
                        className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200"
                        onClick={() => setActiveTab("engineering")}
                      >
                        Engineering
                      </button>
                      <button
                        className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200"
                        onClick={() => setActiveTab("business")}
                      >
                        Business
                      </button>
                      <button
                        className="px-4 py-2 text-sm font-medium rounded-r-lg bg-gray-100 hover:bg-gray-200"
                        onClick={() => setActiveTab("sciences")}
                      >
                        Sciences
                      </button>
                    </div>
                  </div>

                  {/* University Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {/* Computer Science Universities */}
                    {(activeTab === "all" || activeTab === "cs") && (
                      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <i className="fas fa-laptop-code text-blue-500 text-xl"></i>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Top Computer Science Programs
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {csUniversities.map((uni) => (
                            <li
                              key={uni.id}
                              className="flex items-center group"
                            >
                              <span className="mr-2 text-gray-400 group-hover:text-blue-500">
                                🌍
                              </span>
                              <a
                                href={uni.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 flex items-center"
                              >
                                {uni.name}
                                <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                  {uni.rank}
                                </span>
                              </a>
                              <button
                                className="ml-auto text-gray-400 hover:text-blue-500"
                                onClick={() => handleSaveUniversity(uni)}
                                title="Save to favorites"
                              >
                                <i className="far fa-bookmark"></i>
                              </button>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <button
                            className="text-sm text-blue-500 hover:text-blue-700 flex items-center"
                            onClick={() => setShowMoreCS(!showMoreCS)}
                          >
                            {showMoreCS ? "Show less" : "Show more options"}
                            <i
                              className={`fas fa-chevron-${
                                showMoreCS ? "up" : "down"
                              } ml-2`}
                            ></i>
                          </button>
                          {showMoreCS && (
                            <ul className="mt-2 space-y-2">
                              {moreCSUniversities.map((uni) => (
                                <li
                                  key={uni.id}
                                  className="flex items-center text-sm"
                                >
                                  <a
                                    href={uni.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-500"
                                  >
                                    {uni.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Business Universities */}
                    {(activeTab === "all" || activeTab === "business") && (
                      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <i className="fas fa-chart-line text-blue-500 text-xl"></i>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Top Business Schools
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {businessUniversities.map((uni) => (
                            <li
                              key={uni.id}
                              className="flex items-center group"
                            >
                              <span className="mr-2 text-gray-400 group-hover:text-blue-500">
                                🌍
                              </span>
                              <a
                                href={uni.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 flex items-center"
                              >
                                {uni.name}
                                <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                  {uni.rank}
                                </span>
                              </a>
                              <button
                                className="ml-auto text-gray-400 hover:text-blue-500"
                                onClick={() => handleSaveUniversity(uni)}
                                title="Save to favorites"
                              >
                                <i className="far fa-bookmark"></i>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Engineering Universities */}
                    {(activeTab === "all" || activeTab === "engineering") && (
                      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <i className="fas fa-cogs text-blue-500 text-xl"></i>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Top Engineering Schools
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {engineeringUniversities.map((uni) => (
                            <li
                              key={uni.id}
                              className="flex items-center group"
                            >
                              <span className="mr-2 text-gray-400 group-hover:text-blue-500">
                                🌍
                              </span>
                              <a
                                href={uni.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 flex items-center"
                              >
                                {uni.name}
                                <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                  {uni.rank}
                                </span>
                              </a>
                              <button
                                className="ml-auto text-gray-400 hover:text-blue-500"
                                onClick={() => handleSaveUniversity(uni)}
                                title="Save to favorites"
                              >
                                <i className="far fa-bookmark"></i>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* University Search Section */}
                  {/* University Search Section */}
                  <div className="relative mt-12">
                    <div className="bg-white p-6 rounded-xl shadow-xl mb-6 border border-gray-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <i className="fas fa-university mr-3 text-blue-500"></i>
                        Find Your Dream University
                      </h3>

                      {/* Enhanced Search Filters */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <i className="fas fa-search mr-2 text-blue-500"></i>
                            Search
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="University name, location or program..."
                              className="w-full border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10 py-3"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <i className="fas fa-search absolute left-3 top-3.5 text-gray-400"></i>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <i className="fas fa-globe mr-2 text-blue-500"></i>
                            Region
                          </label>
                          <select
                            className="w-full border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3"
                            value={regionFilter}
                            onChange={(e) => setRegionFilter(e.target.value)}
                          >
                            <option value="">All Regions</option>
                            <option value="north-america">North America</option>
                            <option value="europe">Europe</option>
                            <option value="asia">Asia</option>
                            <option value="australia">Australia/Oceania</option>
                            <option value="latin-america">Latin America</option>
                            <option value="africa">Africa</option>
                            <option value="middle-east">Middle East</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <i className="fas fa-graduation-cap mr-2 text-blue-500"></i>
                            Program
                          </label>
                          <select
                            className="w-full border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3"
                            value={programFilter}
                            onChange={(e) => setProgramFilter(e.target.value)}
                          >
                            <option value="">All Programs</option>
                            <option value="engineering">
                              Engineering & Technology
                            </option>
                            <option value="computer-science">
                              Computer Science & IT
                            </option>
                            <option value="business">
                              Business & Management
                            </option>
                            <option value="medicine">
                              Medicine & Health Sciences
                            </option>
                            <option value="sciences">Natural Sciences</option>
                            <option value="arts">Arts & Humanities</option>
                            <option value="social-sciences">
                              Social Sciences
                            </option>
                            <option value="law">Law</option>
                            <option value="architecture">Architecture</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <i className="fas fa-trophy mr-2 text-blue-500"></i>
                            Ranking
                          </label>
                          <select
                            className="w-full border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3"
                            value={rankingFilter}
                            onChange={(e) => setRankingFilter(e.target.value)}
                          >
                            <option value="">Any Ranking</option>
                            <option value="top-100">Top 100 Worldwide</option>
                            <option value="top-500">Top 500 Worldwide</option>
                            <option value="top-regional">Top Regional</option>
                            <option value="subject-top">Top in Subject</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        <button
                          className="!rounded-lg bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                          onClick={handleSearch}
                        >
                          <i className="fas fa-search mr-2"></i>
                          Search Universities
                        </button>
                        <button
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                          onClick={resetFilters}
                        >
                          <i className="fas fa-redo mr-2"></i>
                          Reset Filters
                        </button>
                      </div>
                    </div>

                    {/* Results Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Map Visualization */}
                      <div className="bg-gray-100 rounded-xl overflow-hidden h-full lg:col-span-2 relative border border-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-90"></div>
                        <div className="relative z-10 p-6 h-full flex flex-col">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <i className="fas fa-map-marked-alt mr-3 text-blue-500"></i>
                            University Map
                          </h4>
                          <div className="bg-white rounded-lg p-4 shadow-inner flex-grow flex items-center justify-center">
                            {/* Map placeholder - would be replaced with actual map component */}
                            <div className="text-center">
                              <i className="fas fa-globe-americas text-5xl text-blue-400 mb-4"></i>
                              <p className="text-gray-600 mb-2">
                                <span className="font-bold text-blue-600">
                                  {filteredUniversities.length}
                                </span>{" "}
                                universities match your criteria
                              </p>
                              <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {filteredUniversities.slice(0, 8).map((uni) => (
                                  <a
                                    key={uni.id}
                                    href={uni.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-all"
                                  >
                                    {uni.shortName || uni.name}
                                  </a>
                                ))}
                                {filteredUniversities.length > 8 && (
                                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    +{filteredUniversities.length - 8} more
                                  </span>
                                )}
                              </div>
                              <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center mx-auto">
                                <i className="fas fa-arrows-alt mr-2"></i>
                                View Fullscreen Map
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* University List */}
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                          <h4 className="font-bold text-gray-800 flex items-center">
                            <i className="fas fa-list-ol mr-2 text-blue-500"></i>
                            Top Results
                          </h4>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-2">
                              Sort by:
                            </span>
                            <select
                              className="text-sm border-0 bg-transparent focus:ring-0 text-blue-600"
                              value={sortBy}
                              onChange={(e) => setSortBy(e.target.value)}
                            >
                              <option value="relevance">Relevance</option>
                              <option value="ranking">Ranking</option>
                              <option value="name">Name</option>
                            </select>
                          </div>
                        </div>
                        <div
                          className="overflow-y-auto"
                          style={{ maxHeight: "500px" }}
                        >
                          {filteredUniversities.slice(0, 10).map((uni) => (
                            <div
                              key={uni._id}
                              className="p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors"
                            >
                              <div className="flex items-start">
                                <img
                                  src={uni.logo}
                                  alt={`${uni.name} logo`}
                                  className="h-10 w-10 object-contain mr-4 border border-gray-200 rounded"
                                  onError={(e) =>
                                    (e.target.src =
                                      "https://via.placeholder.com/40")
                                  }
                                />
                                <div className="flex-grow">
                                  <h5 className="font-bold text-gray-900">
                                    {uni.name}
                                  </h5>
                                  <div className="flex flex-wrap items-center text-sm text-gray-600 mt-1">
                                    <span className="flex items-center mr-3">
                                      <i className="fas fa-map-marker-alt mr-1 text-blue-500"></i>
                                      {uni.location}
                                    </span>
                                    <span className="flex items-center mr-3">
                                      <i className="fas fa-trophy mr-1 text-blue-500"></i>
                                      #{uni.worldRanking} Worldwide
                                    </span>
                                    <span className="flex items-center">
                                      <i className="fas fa-star mr-1 text-blue-500"></i>
                                      {uni.rating}/5.0
                                    </span>
                                  </div>
                                </div>
                                <a
                                  href={uni.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                                >
                                  View{" "}
                                  <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                                </a>
                              </div>
                            </div>
                          ))}
                          {filteredUniversities.length === 0 && (
                            <div className="p-8 text-center text-gray-500">
                              <i className="fas fa-university text-3xl mb-3 text-gray-300"></i>
                              <p>No universities match your search criteria</p>
                              <button
                                onClick={resetFilters}
                                className="mt-3 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                Reset filters
                              </button>
                            </div>
                          )}
                          {filteredUniversities.length > 10 && (
                            <div className="p-4 text-center">
                              <button className="text-blue-600 hover:text-blue-800 font-medium">
                                Load More ({filteredUniversities.length - 10}+)
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-12 bg-white">
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Scholarship and Funding Information
                  </h2>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Explore scholarship opportunities and funding resources for
                    your higher education journey.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Common Scholarship Opportunities
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="mr-2">💰</span>
                        <a
                          href="https://foreign.fulbrightonline.org/"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Fulbright Scholarship (US)
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">💰</span>
                        <a
                          href="https://www.daad.de/en/"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          DAAD Scholarship (Germany)
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">💰</span>
                        <a
                          href="https://www.chevening.org/"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Chevening Scholarship (UK)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Tips for Writing a Strong SOP
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Learn how to craft a compelling Statement of Purpose
                        that stands out.
                      </p>
                      <a
                        href="https://groups.google.com/g/graduate-school-from-nsit/c/SFMB0s4R3wk?pli=1"
                        className="flex items-center text-blue-500 hover:text-blue-700"
                      >
                        <i className="fas fa-file-pdf mr-2" />
                        Download SOP Writing Guide (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div
              id="resources"
              className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="lg:text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Study Resources
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Access comprehensive study materials and preparation guides.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                      <i className="fas fa-book-open" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      Study Guides
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Comprehensive guides for all major exams
                    </p>
                    <a
                      href="https://drive.google.com/drive/folders/1HQ8IXi11jfXOUYLLQ1m7xw22qs5Ur9Uk"
                      className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center"
                    >
                      Access Guides
                    </a>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                      <i className="fas fa-video" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      Video Lectures
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Curated video content from experts
                    </p>
                    <a
                      href="https://www.youtube.com/c/TOEFLtv"
                      className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center"
                    >
                      Watch Videos
                    </a>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                      <i className="fas fa-tasks" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      Practice Tests
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Mock tests and practice questions
                    </p>
                    <a
                      href="https://gre.myprepclub.com/forum/shorter-gre-the-best-free-practice-tests-and-questions-banks-33423.html"
                      className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center"
                    >
                      Start Practice
                    </a>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                      <i className="fas fa-users" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      Study Groups
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Join peer study groups
                    </p>
                    <a
                      href="https://www.reddit.com/r/GRE/"
                      className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center"
                    >
                      Join Groups
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Track Your Progress
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Monitor your preparation and application progress.
                </p>
              </div>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Application Timeline
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">
                                GRE Test
                              </span>
                              <span className="text-sm font-medium text-green-600">
                                Completed
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: "100%" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">
                                TOEFL Preparation
                              </span>
                              <span className="text-sm font-medium text-blue-600">
                                In Progress
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">
                                University Applications
                              </span>
                              <span className="text-sm font-medium text-yellow-600">
                                Pending
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-500 h-2 rounded-full"
                                style={{ width: "30%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Study Progress
                      </h3>
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-blue-500">
                          <span className="text-2xl font-bold text-blue-500">
                            75%
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          of study materials completed
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            <a
                              href="https://www.ets.org/gre/revised_general/prepare/"
                              className="hover:underline"
                            >
                              Complete Topic Reviews
                            </a>
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            <a
                              href="https://www.ets.org/gre/revised_general/prepare/practice_tests/"
                              className="hover:underline"
                            >
                              Practice Tests
                            </a>
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            <a
                              href="https://www.ets.org/gre/revised_general/prepare/practice_tests/"
                              className="hover:underline"
                            >
                              Mock Exams
                            </a>
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            <a
                              href="https://www.vocabulary.com/"
                              className="hover:underline"
                            >
                              Vocabulary Building
                            </a>
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            <a
                              href="https://www.youtube.com/c/TOEFLtv"
                              className="hover:underline"
                            >
                              Video Lectures
                            </a>
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            <a
                              href="https://www.ets.org/toefl/test-takers/ibt/prepare/"
                              className="hover:underline"
                            >
                              Writing Practice
                            </a>
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            <a
                              href="https://www.ets.org/gre/revised_general/prepare/"
                              className="hover:underline"
                            >
                              Previous Year Papers
                            </a>
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            <a
                              href="https://quizlet.com/"
                              className="hover:underline"
                            >
                              Interactive Quizzes
                            </a>
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            <a
                              href="https://www.reddit.com/r/GRE/"
                              className="hover:underline"
                            >
                              Group Discussion Sessions
                            </a>
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            <a
                              href="https://www.wyzant.com/"
                              className="hover:underline"
                            >
                              Expert Consultation
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Upcoming Deadlines
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white rounded shadow-sm">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            <a
                              href="https://www.stanford.edu/"
                              className="hover:underline"
                            >
                              Stanford Application
                            </a>
                          </h4>
                          <p className="text-sm text-gray-500">Dec 1, 2023</p>
                        </div>
                        <div className="w-24 h-2 bg-red-200 rounded-full">
                          <div
                            className="h-2 bg-red-500 rounded-full"
                            style={{ width: "80%" }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded shadow-sm">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            <a
                              href="https://www.mit.edu/"
                              className="hover:underline"
                            >
                              MIT Application
                            </a>
                          </h4>
                          <p className="text-sm text-gray-500">Dec 15, 2023</p>
                        </div>
                        <div className="w-24 h-2 bg-yellow-200 rounded-full">
                          <div
                            className="h-2 bg-yellow-500 rounded-full"
                            style={{ width: "60%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HigherStudies;
