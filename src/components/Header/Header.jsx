import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { getAppliedJobs } from "../utils/FakeDb";

const Header = () => {
  const appliedJobs = getAppliedJobs();
  if (appliedJobs.length > 0) {
    console.log(appliedJobs);
  } else {
    console.log("No jobs applied");
  }

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/home">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="hidden sm:block">
        <ul className="flex items-center space-x-4 font-semibold">
          <li>
            <Link to="/home" className="cursor-pointer hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/statistics"
              className="cursor-pointer hover:text-blue-400"
            >
              Statistics
            </Link>
          </li>
          {appliedJobs.length > 0 && (
            <li>
              <Link
                to="/applied-jobs"
                className="cursor-pointer hover:text-blue-400"
              >
                Applied Jobs
              </Link>
            </li>
          )}
          <li>
            <Link to="/blog" className="cursor-pointer hover:text-blue-400">
              Blog
            </Link>
          </li>
        </ul>
      </div>

      <div className="sm:hidden relative">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          onClick={toggleMobileNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        {isMobileNavOpen && (
          <div className="absolute top-full left-0 bg-white w-full py-4 px-2 transition-all duration-300 ease-in-out">
            <ul className="flex flex-col items-start space-y-4">
              <li>
                <Link
                  to="/home"
                  className="cursor-pointer hover:text-blue-400"
                  onClick={toggleMobileNav}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/statistics"
                  className="cursor-pointer hover:text-blue-400"
                  onClick={toggleMobileNav}
                >
                  Statistics
                </Link>
              </li>
              {appliedJobs.length > 0 && (
                <li>
                  <Link
                    to="/applied-jobs"
                    className="cursor-pointer hover:text-blue-400"
                    onClick={toggleMobileNav}
                  >
                    Applied Jobs
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/blog"
                  className="cursor-pointer hover:text-blue-400"
                  onClick={toggleMobileNav}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
