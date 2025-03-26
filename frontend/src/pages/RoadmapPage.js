import React from "react";
import { useNavigate } from "react-router-dom";
const RoadmapPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NITK Nexus - Placement Preparation Hub</title>
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
        <nav className="bg-white shadow-sm">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
                    alt="NITK Nexus"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="#"
                    className="border-custom text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Community
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Profile
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <button className="!rounded-button bg-blue-500 text-white px-4 py-2 text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="bg-white" style={{ order: 2 }}>
            <div className="max-w-8xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Placement Preparation Hub
                </h1>
                <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                  Your one-stop destination for comprehensive placement
                  preparation resources and guidance.
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      className="!rounded-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-gray-700 bg-blue-500 hover:bg-blue-500/90 md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none shadow-lg hover:shadow-2xl"
                      onclick="document.getElementById('id-35').scrollIntoView({behavior: 'smooth', block: 'start'})"
                    >
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ order: 1 }}
          >
            <div className="mt-10" style={{ scrollMarginTop: 100 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Core Subjects &amp; Learning Paths
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-brain text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          Aptitude &amp; Reasoning
                        </h3>
                        <div className="mt-3 flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: "45%" }}
                            />
                          </div>
                          <span className="ml-3 text-sm text-gray-500">
                            45%
                          </span>
                        </div>
                      </div>
                    </div>
                    <a href="https://www.indiabix.com/logical-reasoning/questions-and-answers/">
                      <button className="!rounded-button mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        Explore Learning Path{" "}
                        <i className="fas fa-arrow-right ml-2" />
                      </button>
                    </a>

                    <div className="mt-4 text-sm text-gray-500">
                      <strong>Recommended:</strong>
                      <ul className="list-disc pl-4 mt-2">
                        <li>R.S. Aggarwal - Quantitative Aptitude</li>
                        <li>PrepInsta Playlist</li>
                        <li>IndiaBix, GeeksforGeeks</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-brain text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          Technical Skills for Placements
                        </h3>
                        <div className="mt-3 flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ml-3 text-sm text-gray-500">
                            60%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <strong className="text-sm text-gray-700">
                        Study Resources:
                      </strong>
                      <ul className="list-disc pl-4 mt-2 text-sm text-gray-500">
                        <li>Programming Languages: C, C++, Java, Python</li>
                        <li>GeeksforGeeks, LeetCode</li>
                        <li>CodeWithHarry (Java), CS Dojo (Python)</li>
                        <li>DSA: CLRS Book, Striver's Sheet</li>
                        <li>DBMS: SQL fundamentals</li>
                      </ul>
                    </div>
                    <button
                      className="!rounded-button mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md"
                      onClick={() => navigate("/data-structure")}
                    >
                      Explore Learning Path{" "}
                      <i className="fas fa-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-brain text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          Soft Skills &amp; Personality Development
                        </h3>
                        <div className="mt-3">
                          <ul className="list-disc pl-4 text-sm text-gray-600">
                            <li>
                              Communication Skills{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Coursera)
                              </a>
                            </li>
                            <li>
                              Leadership &amp; Team Building{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (LinkedIn Learning)
                              </a>
                            </li>
                            <li>
                              Public Speaking{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Toastmasters)
                              </a>
                            </li>
                            <li>Email Writing &amp; Business Communication</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button className="!rounded-button mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                      Explore Learning Path{" "}
                      <i className="fas fa-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-brain text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          Interview Preparation (HR + Technical)
                        </h3>
                        <div className="mt-3">
                          <ul className="list-disc pl-4 text-sm text-gray-600">
                            <li>Common HR Questions &amp; Answers</li>
                            <li>
                              Technical Interview Practice{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (InterviewBit)
                              </a>
                            </li>
                            <li>
                              Mock Interviews{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Pramp)
                              </a>
                            </li>
                            <li>Resume Building Tips</li>
                            <li>Body Language &amp; Interview Etiquette</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button className="!rounded-button mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                      Explore Learning Path{" "}
                      <i className="fas fa-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-brain text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          Advanced CS Fundamentals
                        </h3>
                        <div className="mt-3">
                          <ul className="list-disc pl-4 text-sm text-gray-600">
                            <li>
                              Operating Systems{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Stanford CS144)
                              </a>
                            </li>
                            <li>
                              Computer Networks{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Gate Smashers)
                              </a>
                            </li>
                            <li>
                              DBMS{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Jenny's Lectures)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button className="!rounded-button mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                      Access Resources <i className="fas fa-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-brain text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          System Design &amp; Architecture
                        </h3>
                        <div className="mt-3">
                          <ul className="list-disc pl-4 text-sm text-gray-600">
                            <li>
                              High Level Design{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Gaurav Sen)
                              </a>
                            </li>
                            <li>
                              Low Level Design{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Sudip Ghosh)
                              </a>
                            </li>
                            <li>
                              Design Patterns{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Head First)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button className="!rounded-button mt-6 w-full bg-gray-50 px-6 py-3 border border-gray-300 text-base font-medium text-gray-700 hover:bg-blue-500 hover:text-black hover:border-custom transition-all duration-300 group-hover:shadow-md">
                      Start Learning <i className="fas fa-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-brain text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          Web Development
                        </h3>
                        <div className="mt-3">
                          <ul className="list-disc pl-4 text-sm text-gray-600">
                            <li>
                              Frontend (React){" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Codevolution)
                              </a>
                            </li>
                            <li>
                              Backend (Node.js){" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Net Ninja)
                              </a>
                            </li>
                            <li>
                              Full Stack Projects{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (FreeCodeCamp)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button className="!rounded-button mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                      View Roadmap <i className="fas fa-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-brain text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          Machine Learning
                        </h3>
                        <div className="mt-3">
                          <ul className="list-disc pl-4 text-sm text-gray-600">
                            <li>
                              Basic ML{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Andrew NG)
                              </a>
                            </li>
                            <li>
                              Deep Learning{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (DeepLearning.AI)
                              </a>
                            </li>
                            <li>
                              ML Projects{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Kaggle)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button className="!rounded-button mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                      Explore Path <i className="fas fa-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-brain text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          Mobile Development
                        </h3>
                        <div className="mt-3">
                          <ul className="list-disc pl-4 text-sm text-gray-600">
                            <li>
                              Android (Kotlin){" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Philipp Lackner)
                              </a>
                            </li>
                            <li>
                              iOS (Swift){" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Paul Hudson)
                              </a>
                            </li>
                            <li>
                              React Native{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Maximilian)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button className="!rounded-button mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                      Start Building <i className="fas fa-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-video text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          Curated Video Playlists
                        </h3>
                        <div className="mt-3">
                          <ul className="list-disc pl-4 text-sm text-gray-600">
                            <li>
                              DSA by Striver{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (YouTube)
                              </a>
                            </li>
                            <li>
                              System Design{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Gaurav Sen)
                              </a>
                            </li>
                            <li>
                              DBMS Complete{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Gate Smashers)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button className="!rounded-button mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                      View Playlists <i className="fas fa-play ml-2" />
                    </button>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="p-6 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="fas fa-laptop-code text-blue-500 text-3xl group-hover:scale-110 transform transition-transform duration-300" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                          Mock Interview Platforms
                        </h3>
                        <div className="mt-3">
                          <ul className="list-disc pl-4 text-sm text-gray-600">
                            <li>
                              LeetCode Premium{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Mock Interviews)
                              </a>
                            </li>
                            <li>
                              InterviewBit{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Practice)
                              </a>
                            </li>
                            <li>
                              Pramp{" "}
                              <a
                                href="#"
                                className="text-blue-500 hover:underline"
                              >
                                (Peer Interviews)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button className="!rounded-button mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                      Start Practice{" "}
                      <i className="fas fa-external-link-alt ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                <i className="fas fa-graduation-cap text-blue-500 mr-2" />
                Interactive Resource Hub
              </h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 xl:grid-cols-4">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-code-branch text-blue-500 text-2xl mr-3" />
                    <h4 className="text-xl font-bold">DSA &amp; Algorithms</h4>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Problems Solved</span>
                      <span className="text-blue-500 font-medium">150/500</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "30%" }}
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <a
                        href="#"
                        className="block px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 text-gray-700 transform hover:scale-105 transition-all mb-3"
                      >
                        <i className="fas fa-play-circle mr-2 text-blue-500" />
                        LeetCode Daily Challenge
                        <span className="float-right">
                          <button className="text-sm bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600">
                            Mark Complete
                          </button>
                        </span>
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 text-gray-700 transform hover:scale-105 transition-all"
                      >
                        <i className="fas fa-book-reader mr-2 text-blue-500" />
                        Striver's SDE Sheet
                        <span className="float-right">
                          <button className="text-sm bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600">
                            Mark Complete
                          </button>
                        </span>
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 text-gray-700 transform hover:scale-105 transition-all"
                      >
                        <i className="fas fa-chart-line mr-2 text-blue-500" />
                        Progress Tracker
                        <div className="mt-2">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500">
                              Rating: 4.5/5
                            </span>
                            <div className="ml-2">
                              <i className="fas fa-star text-yellow-400" />
                              <i className="fas fa-star text-yellow-400" />
                              <i className="fas fa-star text-yellow-400" />
                              <i className="fas fa-star text-yellow-400" />
                              <i className="fas fa-star-half-alt text-yellow-400" />
                            </div>
                          </div>
                          <button className="mt-1 text-sm text-blue-500 hover:underline">
                            Read Reviews (42)
                          </button>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 text-gray-700 transform hover:scale-105 transition-all"
                      >
                        <i className="fas fa-users mr-2 text-blue-500" />
                        Group Practice
                        <button className="ml-2 text-sm bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
                          Save for Later
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg mt-4">
                    <h5 className="font-medium text-blue-700 mb-2">
                      Recommended Next Topics:
                    </h5>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <i className="fas fa-arrow-right text-blue-500 mr-2" />
                        Dynamic Programming
                        <button className="ml-auto text-sm bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
                          Start
                        </button>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-arrow-right text-blue-500 mr-2" />
                        Graph Algorithms
                        <button className="ml-auto text-sm bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
                          Start
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-laptop-code text-blue-500 text-2xl mr-3" />
                    <h4 className="text-xl font-bold">Interactive Tutorials</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all">
                      <i className="fab fa-python text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">Python</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all">
                      <i className="fab fa-java text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">Java</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all">
                      <i className="fab fa-js text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">JavaScript</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all">
                      <i className="fas fa-database text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">SQL</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all">
                      <i className="fab fa-cpp text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">C++</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all">
                      <i className="fab fa-rust text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">Rust</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all">
                      <i className="fab fa-swift text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">Swift</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all">
                      <i className="fab fa-golang text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">Go</p>
                    </div>
                  </div>
                  <button className="w-full bg-blue-500 !text-white py-2 rounded-md hover:bg-blue-500/90">
                    Start Learning
                    <i className="fas fa-rocket ml-2 animate-bounce" />
                  </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-comments text-blue-500 text-2xl mr-3" />
                    <h4 className="text-xl font-bold">
                      Interactive Learning Hub
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Live Sessions</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>System Design Workshop</span>
                          <button className="text-blue-500 hover:underline">
                            Join
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Code Review Session</span>
                          <button className="text-blue-500 hover:underline">
                            Join
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Algorithm Masterclass</span>
                          <button className="text-blue-500 hover:underline">
                            Join
                          </button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-medium mb-2">Quick Quiz</h5>
                        <div className="space-y-2">
                          <div className="p-2 bg-gray-100 rounded">
                            <p className="mb-2">
                              What is the time complexity of QuickSort?
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              <button className="text-sm bg-white p-2 rounded hover:bg-blue-500 hover:text-white">
                                O(n log n)
                              </button>
                              <button className="text-sm bg-white p-2 rounded hover:bg-blue-500 hover:text-white">
                                O(n²)
                              </button>
                              <button className="text-sm bg-white p-2 rounded hover:bg-blue-500 hover:text-white">
                                O(n)
                              </button>
                              <button className="text-sm bg-white p-2 rounded hover:bg-blue-500 hover:text-white">
                                O(log n)
                              </button>
                            </div>
                          </div>
                          <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-500/90">
                            Submit Answer
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center text-green-500 mb-2">
                        <i className="fas fa-graduation-cap mr-2" />
                        <span>Interactive Tutorials</span>
                      </div>
                      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-500/90 transform hover:scale-105 transition-all">
                        Start Learning
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-trophy text-blue-500 text-2xl mr-3" />
                    <h4 className="text-xl font-bold">Competitive Arena</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-3">Live Contests</h5>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span>Algorithm Battle</span>
                          <span className="text-green-500">Active</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Code Sprint</span>
                          <span className="text-yellow-500">In 2h</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Team Challenge</span>
                          <span className="text-blue-500">Tomorrow</span>
                        </li>
                      </ul>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-500/90 transform hover:scale-105 transition-all">
                      Join Contest
                    </button>
                    <div className="mt-4 text-sm text-gray-500">
                      🏆 Weekly Prizes for Top Performers
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-chart-line text-blue-500 mr-3" />
                    Your Learning Analytics
                  </div>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Weekly Progress</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Problems Solved</span>
                      <span className="text-blue-500 font-medium">25/30</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "83%" }}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Monthly Stats</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <span className="block text-2xl font-bold text-blue-500">
                          45
                        </span>
                        <span className="text-sm text-gray-500">
                          Hours Spent
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="block text-2xl font-bold text-blue-500">
                          120
                        </span>
                        <span className="text-sm text-gray-500">Problems</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Achievements</h4>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-medal text-yellow-500" />
                      <span>Top Performer</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <i className="fas fa-star text-blue-500" />
                      <span>5 Day Streak</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
            <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="p-2 rounded-lg bg-blue-500 shadow-lg sm:p-3">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="flex p-2 rounded-lg">
                      <i className="fas fa-info-circle text-white" />
                    </span>
                    <p className="ml-3 font-medium text-white truncate">
                      <span className="hidden md:inline">
                        Join our community forum discussions to connect with
                        peers and mentors!
                      </span>
                    </p>
                  </div>
                  <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <button className="!rounded-button flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-500 bg-white hover:bg-gray-50">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gradient-to-b from-blue-50 to-white mt-24">
          <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                  Quick Links
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-blue-500 transition-colors duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-blue-500 transition-colors duration-300"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-blue-500 transition-colors duration-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-blue-500 transition-colors duration-300"
                    >
                      Study Materials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-blue-500 transition-colors duration-300"
                    >
                      Career Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-blue-500 transition-colors duration-300"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                  Connect with Us
                </h3>
                <div className="flex space-x-8 mt-6">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <i className="fab fa-linkedin text-2xl text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <i className="fab fa-twitter text-2xl text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <i className="fab fa-instagram text-2xl text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8 text-center">
              <p className="text-sm text-gray-500 font-medium">
                © 2025 NITK Nexus | Built by NITK Students for NITK Students
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RoadmapPage;
