import React from "react";

const HigherStudies = () => {
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
        <nav className="bg-white shadow-sm fixed w-full z-50">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
                  alt="NITK Nexus Logo"
                  className="h-8 w-auto"
                />
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <a
                    href="#"
                    className="text-blue-500 border-b-2 border-blue-500 px-1 inline-flex items-center h-full text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#exams"
                    className="text-gray-500 hover:text-blue-500 px-1 inline-flex items-center h-full text-sm font-medium"
                  >
                    Exams
                  </a>
                  <a
                    href="#universities"
                    className="text-gray-500 hover:text-blue-500 px-1 inline-flex items-center h-full text-sm font-medium"
                  >
                    Universities
                  </a>
                  <a
                    href="#resources"
                    className="text-gray-500 hover:text-blue-500 px-1 inline-flex items-center h-full text-sm font-medium"
                  >
                    Resources
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <a href="/login" className="!rounded-button bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700">
                  Sign In
                </a>
              </div>
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
                        <a href="#exams" className="!rounded-button w-64 flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                          <i className="fas fa-rocket mr-2" /> Start Your
                          Journey
                        </a>
                      </div>
                      <div className="relative group">
                        <a href="#resources" className="!rounded-button w-64 flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-lg font-medium text-blue-500 bg-white hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm">
                          <i className="fas fa-book-reader mr-2" /> Explore
                          Resources
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="exams" className="py-12 bg-gray-50">
            <section className="py-8 bg-white border-b">
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
            </section>
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
                        <i className="fas fa-file-pdf mr-2" /> GRE
                        3-Month Study Plan
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
                    <a href="https://www.ets.org/gre" className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center">
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
                    <a href="https://gate.iitk.ac.in/" className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center">
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
                    <a href="https://www.ets.org/toefl" className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center">
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
                    <a href="https://www.topuniversities.com/university-rankings" className="!rounded-button w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      <i className="fas fa-calendar-alt text-blue-500 mr-2" />
                      Upcoming Webinars
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded">
                        <h4 className="font-medium">SOP Writing Workshop</h4>
                        <p className="text-sm text-gray-500">
                          Dec 15, 2023 • 2:00 PM
                        </p>
                        <a href="https://www.eventbrite.com/" className="mt-2 text-blue-500 hover:text-blue-700 text-sm">
                          Register Now
                        </a>
                      </div>
                      <div className="p-4 bg-gray-50 rounded">
                        <h4 className="font-medium">Meet Stanford Alumni</h4>
                        <p className="text-sm text-gray-500">
                          Dec 18, 2023 • 3:30 PM
                        </p>
                        <a href="https://www.eventbrite.com/" className="mt-2 text-blue-500 hover:text-blue-700 text-sm">
                          Register Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      <i className="fas fa-user-graduate text-blue-500 mr-2" />
                      Connect with Alumni
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://ai-public.creatie.ai/gen_page/avatar1.png"
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <h4 className="font-medium">Sarah Chen</h4>
                          <p className="text-sm text-gray-500">
                            Stanford University '22
                          </p>
                          <a href="https://www.linkedin.com/" className="text-blue-500 hover:text-blue-700 text-sm">
                            Connect
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://ai-public.creatie.ai/gen_page/avatar2.png"
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <h4 className="font-medium">John Smith</h4>
                          <p className="text-sm text-gray-500">MIT '21</p>
                          <a href="https://www.linkedin.com/" className="text-blue-500 hover:text-blue-700 text-sm">
                            Connect
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      <i className="fas fa-lightbulb text-blue-500 mr-2" />
                      Personalized Recommendations
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded">
                        <h4 className="font-medium">Based on your profile</h4>
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-center">
                            <i className="fas fa-university text-blue-500 mr-2" />
                            <a href="https://www.cmu.edu/" className="hover:underline">Carnegie Mellon University</a>
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-book text-blue-500 mr-2" />
                            <a href="https://www.magoosh.com/gre/" className="hover:underline">Advanced GRE Quant Course</a>
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-file-alt text-blue-500 mr-2" />
                            <a href="https://www.ets.org/gre/" className="hover:underline">SOP Template: CS Major</a>
                          </li>
                        </ul>
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
                        href="https://www.ets.org/gre/revised_general/prepare/sop/"
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
            <div id="resources" className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <a href="https://www.ets.org/gre/revised_general/prepare/" className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center">
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
                    <a href="https://www.youtube.com/c/TOEFLtv" className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center">
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
                    <a href="https://www.ets.org/gre/revised_general/prepare/" className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center">
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
                    <a href="https://www.reddit.com/r/GRE/" className="!rounded-button mt-4 w-full bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 flex justify-center">
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
                            <a href="https://www.ets.org/gre/revised_general/prepare/" className="hover:underline">
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
                            <a href="https://www.ets.org/gre/revised_general/prepare/practice_tests/" className="hover:underline">
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
                            <a href="https://www.ets.org/gre/revised_general/prepare/practice_tests/" className="hover:underline">
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
                            <a href="https://www.vocabulary.com/" className="hover:underline">
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
                            <a href="https://www.youtube.com/c/TOEFLtv" className="hover:underline">
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
                            <a href="https://www.ets.org/toefl/test-takers/ibt/prepare/" className="hover:underline">
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
                            <a href="https://www.ets.org/gre/revised_general/prepare/" className="hover:underline">
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
                            <a href="https://quizlet.com/" className="hover:underline">
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
                            <a href="https://www.reddit.com/r/GRE/" className="hover:underline">
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
                            <a href="https://www.wyzant.com/" className="hover:underline">
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
                            <a href="https://www.stanford.edu/" className="hover:underline">Stanford Application</a>
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
                            <a href="https://www.mit.edu/" className="hover:underline">MIT Application</a>
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
        <footer className="bg-gradient-to-b from-blue-900 to-blue-800">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
                  alt="NITK Nexus Logo"
                  className="h-8 w-auto mb-4"
                />
                <p className="text-gray-400 text-sm">
                  Guiding students towards academic excellence and higher
                  education success.
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#exams"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      Exams
                    </a>
                  </li>
                  <li>
                    <a
                      href="#universities"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      Universities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#resources"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.ets.org/gre"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      GRE Official
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gate.iitk.ac.in/"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      GATE Official
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ets.org/toefl"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      TOEFL Official
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-6">
                  <a
                    href="https://www.linkedin.com/"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin text-xl" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-twitter text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-instagram text-xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 opacity-90">
              <p className="text-center text-gray-400 text-sm">
                © 2025 NITK Nexus | Built by NITK Students for NITK Students
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HigherStudies;