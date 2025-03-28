import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-custom/30 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
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
      </div>
    </div>
  );
};

export default Navbar;
