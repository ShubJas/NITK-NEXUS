import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NITK Nexus</title>
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
              ".bot-button { transition: all 0.3s ease-in-out; box-shadow: 0 0 15px rgba(0, 123, 255, 0.3); animation: pulse 2s infinite; } @keyframes pulse { 0% { box-shadow: 0 0 15px rgba(0, 123, 255, 0.3); } 50% { box-shadow: 0 0 25px rgba(0, 123, 255, 0.5); } 100% { box-shadow: 0 0 15px rgba(0, 123, 255, 0.3); } } .bot-button:hover { width: auto; padding-right: 2rem; } .bot-button:hover .bot-text { opacity: 1; width: auto; }",
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".bot-button { transition: all 0.3s ease-in-out; box-shadow: 0 0 15px rgba(0, 123, 255, 0.3); animation: pulse 2s infinite; } @keyframes pulse { 0% { box-shadow: 0 0 15px rgba(0, 123, 255, 0.3); } 50% { box-shadow: 0 0 25px rgba(0, 123, 255, 0.5); } 100% { box-shadow: 0 0 15px rgba(0, 123, 255, 0.3); } } .bot-button:hover { width: auto; padding-right: 2rem; } .bot-button:hover .bot-text { opacity: 1; width: auto; }",
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".animate-wave { background-size: 400% 400%; animation: wave 15s ease-in-out infinite; } @keyframes wave { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } } .particles { position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; } .particles:before { content: ''; position: absolute; width: 3px; height: 3px; background: rgba(0,123,255,0.3); box-shadow: 0 0 0 3px rgba(0,123,255,0.3), 40vw 20vh 0 2px rgba(0,123,255,0.3), 80vw 50vh 0 2px rgba(0,123,255,0.3), 20vw 70vh 0 2px rgba(0,123,255,0.3), 60vw 30vh 0 2px rgba(0,123,255,0.3), 30vw 60vh 0 2px rgba(0,123,255,0.3), 70vw 40vh 0 2px rgba(0,123,255,0.3), 90vw 80vh 0 2px rgba(0,123,255,0.3), 10vw 90vh 0 2px rgba(0,123,255,0.3); animation: particleFloat 20s infinite linear; } .particles:after { content: ''; position: absolute; width: 3px; height: 3px; background: rgba(0,123,255,0.3); box-shadow: 0 0 0 3px rgba(0,123,255,0.3), 45vw 25vh 0 2px rgba(0,123,255,0.3), 85vw 55vh 0 2px rgba(0,123,255,0.3), 25vw 75vh 0 2px rgba(0,123,255,0.3), 65vw 35vh 0 2px rgba(0,123,255,0.3), 35vw 65vh 0 2px rgba(0,123,255,0.3), 75vw 45vh 0 2px rgba(0,123,255,0.3), 95vw 85vh 0 2px rgba(0,123,255,0.3), 15vw 95vh 0 2px rgba(0,123,255,0.3); animation: particleFloat 25s infinite linear; } @keyframes particleFloat { 0% { transform: translateY(100vh) } 100% { transform: translateY(-100vh) } }",
          }}
        />
        <header className="bg-white/50 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
                  alt="Logo"
                  className="h-10 w-auto transition-transform duration-300 hover:scale-110"
                />
                <h1 className="ml-3 text-xl font-semibold text-gray-900">
                  NITK NEXUS
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="px-6 py-2 rounded-full bg-white/70 text-gray-600 hover:shadow-lg hover:shadow-custom/20 hover:animate-pulse transition-all duration-300"
                >
                  About
                </a>
                <a
                  href="#"
                  className="px-6 py-2 rounded-full bg-white/70 text-gray-600 hover:shadow-lg hover:shadow-custom/20 hover:animate-pulse transition-all duration-300"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="px-6 py-2 rounded-full bg-white/70 text-gray-600 hover:shadow-lg hover:shadow-custom/20 hover:animate-pulse transition-all duration-300"
                >
                  Community Forum
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-24 relative overflow-hidden isolation">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white animate-wave" />
            <div className="particles" />
          </div>
          <section className="text-center max-w-4xl mx-auto mb-28 relative">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering NITK Students for Academic &amp; Career Success
            </h2>
            <p className="text-lg text-gray-600">
              Join NITK NEXUS - your comprehensive platform designed
              specifically for NITK students. Navigate through academic
              excellence, career opportunities, and a thriving community of
              achievers.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="px-8 py-3 bg-custom text-white font-semibold rounded-button hover:bg-blue-700 transition-all transform hover:scale-105">
                Explore Roadmaps
              </button>
              <button className="px-8 py-3 border-2 border-custom text-custom font-semibold rounded-button hover:bg-custom hover:text-white transition-all transform hover:scale-105">
                Join the Community
              </button>
            </div>
          </section>
          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 relative group">
              <div className="p-8 pb-24">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-book text-custom text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Regular Course Track
                </h3>
                <p className="text-gray-600 mb-6">
                  Master your academic subjects with structured learning paths,
                  study materials, and expert guidance.
                </p>
                <button className="w-full bg-custom text-white py-3 !rounded-button hover:bg-blue-700 transition-colors">
                  Explore Curriculum
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/75 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <p className="text-sm">
                    Includes Semester-wise Study Plans, Course Materials,
                    Practice Tests.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 relative group">
              <div className="p-8 pb-24">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-briefcase text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Placement Preparation
                </h3>
                <p className="text-gray-600 mb-6">
                  Get ready for your dream job with interview prep, resume
                  building, and placement strategies.
                </p>
                <button className="w-full bg-green-600 text-white py-3 !rounded-button hover:bg-green-700 transition-colors">
                  Start Preparation
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/75 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <p className="text-sm">
                    Explore company-specific preparation guides, resume
                    templates, and interview strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 relative group">
              <div className="p-8 pb-24">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-graduation-cap text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Higher Studies Path
                </h3>
                <p className="text-gray-600 mb-6">
                  Plan your advanced education journey with comprehensive guides
                  for various programs.
                </p>
                <button className="w-full bg-purple-600 text-white py-3 !rounded-button hover:bg-purple-700 transition-colors">
                  Discover Options
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/75 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <p className="text-sm">
                    Discover MS roadmaps, GRE resources, and SOP samples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-white border-t mt-20">
          <div className="max-w-8xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b pb-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  About NITK Nexus
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  A student-led initiative to guide NITKians through their
                  academic and career journeys.
                </p>
              </div>
              <div className="border-l pl-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-custom">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-custom">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-custom">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="border-l pl-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Resources
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-custom">
                      Study Materials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-custom">
                      Career Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-custom">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="border-l pl-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-custom">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-custom">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-custom">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 text-center text-gray-600 bg-gradient-to-t from-white to-blue-50 py-6">
              <p>
                © 2025 NITK Nexus | Built by NITK Students for NITK Students.
              </p>
            </div>
          </div>
        </footer>
        <div
          className="bot-button fixed bottom-8 right-8 bg-custom text-white rounded-full p-4 cursor-pointer flex items-center justify-center hover:bg-blue-700 z-50"
          style={{ width: 60, height: 60 }}
        >
          <i className="fas fa-robot text-xl" />
          <span className="bot-text ml-2 opacity-0 whitespace-nowrap w-0 overflow-hidden transition-all duration-300">
            Ask NITK Bot: Get Study &amp; Placement Guidance
          </span>
        </div>
        <div
          className="bot-button fixed bottom-8 right-8 bg-custom text-white rounded-full p-4 cursor-pointer flex items-center justify-center hover:bg-blue-700 z-50"
          style={{ width: 60, height: 60 }}
        >
          <i className="fas fa-robot text-xl" />
          <span className="bot-text ml-2 opacity-0 whitespace-nowrap w-0 overflow-hidden transition-all duration-300">
            Ask NITK Bot: Get Study &amp; Placement Guidance
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
