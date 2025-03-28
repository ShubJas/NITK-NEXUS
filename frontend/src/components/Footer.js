import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-50 to-white mt-24">
        <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                Quick Links
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-blue-500 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-base text-gray-500 hover:text-blue-500 transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
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
                    href="/resources"
                    className="text-base text-gray-500 hover:text-blue-500 transition-colors duration-300"
                  >
                    Study Materials
                  </a>
                </li>
                <li>
                  <a
                    href="/career-guide"
                    className="text-base text-gray-500 hover:text-blue-500 transition-colors duration-300"
                  >
                    Career Guide
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
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
                <a
                  href="https://www.linkedin.com/"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <i className="fab fa-linkedin text-2xl text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <i className="fab fa-twitter text-2xl text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-gray-400 hover:text-gray-500"
                >
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
      </div>
    </div>
  );
};

export default Footer;
