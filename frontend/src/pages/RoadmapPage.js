import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar_rm";
import Footer from "../components/Footer";
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
        <Navbar />
        <main>
          <div className="bg-white" style={{ order: 2 }}>
            <div id ='dashboard'className="max-w-8xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Placement Preparation Hub
                </h1>
                <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                  Your one-stop destination for comprehensive placement
                  preparation resources and guidance.
                </p>
                <div class="mt-8 flex justify-center">
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                  <button 
  onClick={() => document.getElementById('LP').scrollIntoView({behavior: 'smooth', block: 'start'})}
  className="!rounded-md w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-blue-500 hover:bg-blue-500/90 md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none shadow-lg hover:shadow-2xl"
>
  Start Learning <i className="fas fa-rocket ml-2 animate-bounce"></i>
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
            <div id="LP" className="mt-10" style={{ scrollMarginTop: 100 }}>
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
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        Explore Learning Path{" "}
                        <i className="fas fa-arrow-right ml-2" />
                      </button>
                    </a>

                    <div className="mt-4 text-sm text-gray-500">
                      <strong>Recommended:</strong>
                      <ul className="list-disc pl-4 mt-2">
                        <li>
                          <a
                            href="https://eltsindia.com/StudyMaterialFiles/ea007acc-bc55-4e17-8470-0d9e85313252quantitative-aptitude-for-competitive-examinations-by-rs-aggarwal-reprint-2017.pdf"
                            className="text-blue-500 hover:underline"
                          >
                            R.S. Aggarwal - Quantitative Aptitude
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://prepinsta.com/learn-aptitude/"
                            className="text-blue-500 hover:underline"
                          >
                            PrepInsta
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.indiabix.com/"
                            className="text-blue-500 hover:underline"
                          >
                            IndiaBix
                          </a>
                          ,{" "}
                          <a
                            href="https://www.geeksforgeeks.org/aptitude-gq/"
                            className="text-blue-500 hover:underline"
                          >
                            GeeksforGeeks
                          </a>
                        </li>
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
                        <li>
                          Programming Languages:
                          <a
                            href="https://www.learn-c.org/"
                            className="text-blue-500 hover:underline"
                          >
                            {" "}
                            C
                          </a>
                          ,
                          <a
                            href="https://www.learncpp.com/"
                            className="text-blue-500 hover:underline"
                          >
                            {" "}
                            C++
                          </a>
                          ,
                          <a
                            href="https://www.codecademy.com/learn/learn-java"
                            className="text-blue-500 hover:underline"
                          >
                            {" "}
                            Java
                          </a>
                          ,
                          <a
                            href="https://www.python.org/about/gettingstarted/"
                            className="text-blue-500 hover:underline"
                          >
                            {" "}
                            Python
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.geeksforgeeks.org/"
                            className="text-blue-500 hover:underline"
                          >
                            GeeksforGeeks
                          </a>
                          ,
                          <a
                            href="https://leetcode.com/"
                            className="text-blue-500 hover:underline"
                          >
                            LeetCode
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q"
                            className="text-blue-500 hover:underline"
                          >
                            CodeWithHarry (Java)
                          </a>
                          ,
                          <a
                            href="https://www.youtube.com/playlist?list=PLBZBJbE_rGRWeh5mIBhD-hhDwSEDxogDg"
                            className="text-blue-500 hover:underline"
                          >
                            CS Dojo (Python)
                          </a>
                        </li>
                        <li>
                          DSA:
                          <a
                            href="https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844"
                            className="text-blue-500 hover:underline"
                          >
                            CLRS Book
                          </a>
                          ,
                          <a
                            href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                            className="text-blue-500 hover:underline"
                          >
                            Striver's Sheet
                          </a>
                        </li>
                        <li>
                          DBMS:
                          <a
                            href="https://www.w3schools.com/sql/"
                            className="text-blue-500 hover:underline"
                          >
                            SQL fundamentals
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a href="https://www.geeksforgeeks.org/data-structures/">
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        Explore Learning Path{" "}
                        <i className="fas fa-arrow-right ml-2" />
                      </button>
                    </a>
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
                                href="https://www.coursera.org/learn/communication-skills"
                                className="text-blue-500 hover:underline"
                              >
                                (Coursera)
                              </a>
                            </li>
                            <li>
                              Leadership &amp; Team Building{" "}
                              <a
                                href="https://www.linkedin.com/learning/developing-your-team-members"
                                className="text-blue-500 hover:underline"
                              >
                                (LinkedIn Learning)
                              </a>
                            </li>
                            <li>
                              Public Speaking{" "}
                              <a
                                href="https://www.toastmasters.org/"
                                className="text-blue-500 hover:underline"
                              >
                                (Toastmasters)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.coursera.org/learn/business-writing"
                                className="text-blue-500 hover:underline"
                              >
                                Email Writing &amp; Business Communication
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="https://www.coursera.org/courses?query=soft%20skills">
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        Explore Learning Path{" "}
                        <i className="fas fa-arrow-right ml-2" />
                      </button>
                    </a>
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
                            <li>
                              <a
                                href="https://www.themuse.com/advice/31-common-interview-questions-and-answers"
                                className="text-blue-500 hover:underline"
                              >
                                Common HR Questions &amp; Answers
                              </a>
                            </li>
                            <li>
                              Technical Interview Practice{" "}
                              <a
                                href="https://www.interviewbit.com/technical-interview-questions/"
                                className="text-blue-500 hover:underline"
                              >
                                (InterviewBit)
                              </a>
                            </li>
                            <li>
                              Mock Interviews{" "}
                              <a
                                href="https://www.pramp.com/"
                                className="text-blue-500 hover:underline"
                              >
                                (Pramp)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://zety.com/blog/resume-tips"
                                className="text-blue-500 hover:underline"
                              >
                                Resume Building Tips
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.thebalancecareers.com/body-language-during-job-interview-2061340"
                                className="text-blue-500 hover:underline"
                              >
                                Body Language &amp; Interview Etiquette
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="https://www.interviewbit.com/practice/">
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        Explore Learning Path{" "}
                        <i className="fas fa-arrow-right ml-2" />
                      </button>
                    </a>
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
                                href="https://www.coursera.org/learn/os-power-user"
                                className="text-blue-500 hover:underline"
                              >
                                (Stanford CS144)
                              </a>
                            </li>
                            <li>
                              Computer Networks{" "}
                              <a
                                href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
                                className="text-blue-500 hover:underline"
                              >
                                (Gate Smashers)
                              </a>
                            </li>
                            <li>
                              DBMS{" "}
                              <a
                                href="https://www.youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc"
                                className="text-blue-500 hover:underline"
                              >
                                (Jenny's Lectures)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="https://www.geeksforgeeks.org/computer-science-projects/">
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        Access Resources{" "}
                        <i className="fas fa-arrow-right ml-2" />
                      </button>
                    </a>
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
                                href="https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX"
                                className="text-blue-500 hover:underline"
                              >
                                (Gaurav Sen)
                              </a>
                            </li>
                            <li>
                              Low Level Design{" "}
                              <a
                                href="https://www.youtube.com/playlist?list=PL564gOx0bCLqTolRIHIsR2JPv11w8LESW"
                                className="text-blue-500 hover:underline"
                              >
                                (Sudip Ghosh)
                              </a>
                            </li>
                            <li>
                              Design Patterns{" "}
                              <a
                                href="https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124"
                                className="text-blue-500 hover:underline"
                              >
                                (Head First)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="https://www.educative.io/courses/grokking-the-system-design-interview">
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-6 py-3 border border-gray-300 text-base font-medium text-gray-700 hover:bg-blue-500 hover:text-black hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        Start Learning <i className="fas fa-arrow-right ml-2" />
                      </button>
                    </a>
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
                                href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"
                                className="text-blue-500 hover:underline"
                              >
                                (Codevolution)
                              </a>
                            </li>
                            <li>
                              Backend (Node.js){" "}
                              <a
                                href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU"
                                className="text-blue-500 hover:underline"
                              >
                                (Net Ninja)
                              </a>
                            </li>
                            <li>
                              Full Stack Projects{" "}
                              <a
                                href="https://www.freecodecamp.org/learn/back-end-development-and-apis/"
                                className="text-blue-500 hover:underline"
                              >
                                (FreeCodeCamp)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="https://roadmap.sh/frontend">
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        View Roadmap <i className="fas fa-arrow-right ml-2" />
                      </button>
                    </a>
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
                                href="https://www.coursera.org/learn/machine-learning"
                                className="text-blue-500 hover:underline"
                              >
                                (Andrew NG)
                              </a>
                            </li>
                            <li>
                              Deep Learning{" "}
                              <a
                                href="https://www.coursera.org/specializations/deep-learning"
                                className="text-blue-500 hover:underline"
                              >
                                (DeepLearning.AI)
                              </a>
                            </li>
                            <li>
                              ML Projects{" "}
                              <a
                                href="https://www.kaggle.com/learn/intro-to-machine-learning"
                                className="text-blue-500 hover:underline"
                              >
                                (Kaggle)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="https://www.coursera.org/learn/machine-learning">
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        Explore Path <i className="fas fa-arrow-right ml-2" />
                      </button>
                    </a>
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
                                href="https://www.youtube.com/playlist?list=PLQkwcJG4YTCQHC1NA7ygR5eYq5Q94o6vI"
                                className="text-blue-500 hover:underline"
                              >
                                (Philipp Lackner)
                              </a>
                            </li>
                            <li>
                              iOS (Swift){" "}
                              <a
                                href="https://www.hackingwithswift.com/100"
                                className="text-blue-500 hover:underline"
                              >
                                (Paul Hudson)
                              </a>
                            </li>
                            <li>
                              React Native{" "}
                              <a
                                href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ"
                                className="text-blue-500 hover:underline"
                              >
                                (Maximilian)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="https://developer.android.com/courses">
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        Start Building <i className="fas fa-arrow-right ml-2" />
                      </button>
                    </a>
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
                                href="https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"
                                className="text-blue-500 hover:underline"
                              >
                                (YouTube)
                              </a>
                            </li>
                            <li>
                              System Design{" "}
                              <a
                                href="https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX"
                                className="text-blue-500 hover:underline"
                              >
                                (Gaurav Sen)
                              </a>
                            </li>
                            <li>
                              DBMS Complete{" "}
                              <a
                                href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII"
                                className="text-blue-500 hover:underline"
                              >
                                (Gate Smashers)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz">
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        View Playlists <i className="fas fa-play ml-2" />
                      </button>
                    </a>
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
                                href="https://leetcode.com/interview/"
                                className="text-blue-500 hover:underline"
                              >
                                (Mock Interviews)
                              </a>
                            </li>
                            <li>
                              InterviewBit{" "}
                              <a
                                href="https://www.interviewbit.com/practice/"
                                className="text-blue-500 hover:underline"
                              >
                                (Practice)
                              </a>
                            </li>
                            <li>
                              Pramp{" "}
                              <a
                                href="https://www.pramp.com/"
                                className="text-blue-500 hover:underline"
                              >
                                (Peer Interviews)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="https://leetcode.com/interview/">
                      <button className="!rounded-md mt-6 w-full bg-gray-50 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white hover:border-custom transition-all duration-300 group-hover:shadow-md">
                        Start Practice{" "}
                        <i className="fas fa-external-link-alt ml-2" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="resources"
              className="mt-16 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg"
            >
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
                        href="https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/"
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
                        href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
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
                        href="https://www.geeksforgeeks.org/top-algorithms-and-data-structures-for-competitive-programming/"
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
                        href="https://www.codechef.com/LEARNDSA"
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
                        <a
                          href="https://www.geeksforgeeks.org/dynamic-programming/"
                          className="hover:underline"
                        >
                          Dynamic Programming
                        </a>
                        <button className="ml-auto text-sm bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
                          Start
                        </button>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-arrow-right text-blue-500 mr-2" />
                        <a
                          href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
                          className="hover:underline"
                        >
                          Graph Algorithms
                        </a>
                        <button className="ml-auto text-sm bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
                          Start
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id='resources' className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-laptop-code text-blue-500 text-2xl mr-3" />
                    <h4 className="text-xl font-bold">Interactive Tutorials</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <a
                      href="https://www.learnpython.org/"
                      className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all"
                    >
                      <i className="fab fa-python text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">Python</p>
                    </a>
                    <a
                      href="https://www.learnjavaonline.org/"
                      className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all"
                    >
                      <i className="fab fa-java text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">Java</p>
                    </a>
                    <a
                      href="https://www.learn-js.org/"
                      className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all"
                    >
                      <i className="fab fa-js text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">JavaScript</p>
                    </a>
                    <a
                      href="https://www.sql-practice.com/"
                      className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all"
                    >
                      <i className="fas fa-database text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">SQL</p>
                    </a>
                    <a
                      href="https://www.learn-cpp.org/"
                      className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all"
                    >
                      <i className="fab fa-cpp text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">C++</p>
                    </a>
                    <a
                      href="https://doc.rust-lang.org/stable/rust-by-example/"
                      className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all"
                    >
                      <i className="fab fa-rust text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">Rust</p>
                    </a>
                    <a
                      href="https://www.hackingwithswift.com/learn"
                      className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all"
                    >
                      <i className="fab fa-swift text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">Swift</p>
                    </a>
                    <a
                      href="https://gobyexample.com/"
                      className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 cursor-pointer transform hover:scale-105 transition-all"
                    >
                      <i className="fab fa-golang text-2xl text-blue-500 mb-2" />
                      <p className="text-sm">Go</p>
                    </a>
                  </div>
                  <a
                    href="https://www.codecademy.com/catalog"
                    className="w-full bg-blue-500 !text-white py-2 rounded-md hover:bg-blue-500/90 flex justify-center items-center"
                  >
                    Start Learning
                    <i className="fas fa-rocket ml-2 animate-bounce" />
                  </a>
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
                          <a
                            href="https://www.youtube.com/live/Un9zn1NqSHw?feature=share"
                            className="text-blue-500 hover:underline"
                          >
                            Join
                          </a>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Code Review Session</span>
                          <a
                            href="https://www.youtube.com/live/0kafYiWEVpU?feature=share"
                            className="text-blue-500 hover:underline"
                          >
                            Join
                          </a>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Algorithm Masterclass</span>
                          <a
                            href="https://www.youtube.com/live/6pLL2fEUJXw?feature=share"
                            className="text-blue-500 hover:underline"
                          >
                            Join
                          </a>
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
                          <a
                            href="https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/"
                            className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-500/90 flex justify-center"
                          >
                            Submit Answer
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center text-green-500 mb-2">
                        <i className="fas fa-graduation-cap mr-2" />
                        <span>Interactive Tutorials</span>
                      </div>
                      <a
                        href="https://www.freecodecamp.org/learn/"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-500/90 transform hover:scale-105 transition-all flex justify-center"
                      >
                        Start Learning
                      </a>
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
                          <a
                            href="https://codeforces.com/contests"
                            className="text-green-500"
                          >
                            Active
                          </a>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Code Sprint</span>
                          <a
                            href="https://www.codechef.com/contests"
                            className="text-yellow-500"
                          >
                            In 2h
                          </a>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Team Challenge</span>
                          <a
                            href="https://codingcompetitions.withgoogle.com/codejam"
                            className="text-blue-500"
                          >
                            Tomorrow
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="https://leetcode.com/contest/"
                      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-500/90 transform hover:scale-105 transition-all flex justify-center"
                    >
                      Join Contest
                    </a>
                    <div className="mt-4 text-sm text-gray-500">
                      🏆 Weekly Prizes for Top Performers
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="analytics"
                className="mt-12 bg-white p-8 rounded-lg shadow-lg"
              >
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
                    <a
                      href="https://discord.gg/learnprogramming"
                      className="!rounded-md flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-500 bg-white hover:bg-gray-50"
                    >
                      Join Now
                    </a>
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

export default RoadmapPage;
