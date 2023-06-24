import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/home">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className="flex items-center space-x-4 font-semibold">
          <Link to="/home" className=" cursor-pointer hover:text-blue-400">
            Home
          </Link>
          <Link
            to="/statistics"
            className=" cursor-pointer hover:text-blue-400"
          >
            Statistics
          </Link>
          <Link
            to="/applied-jobs"
            className=" cursor-pointer hover:text-blue-400"
          >
            Applied Jobs
          </Link>
          <Link to="/blog" className=" cursor-pointer hover:text-blue-400">
            Blog
          </Link>
        </ul>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Start Applying
        </button>
      </nav>
    </div>
  );
};

export default Header;
