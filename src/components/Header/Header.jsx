import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="flex items-center space-x-4">
          <Link to="/home" className=" cursor-pointer">
            Home
          </Link>
          <Link to="/statistics" className=" cursor-pointer">
            Statistics
          </Link>
          <Link to="/about" className=" cursor-pointer">
            About
          </Link>
          <Link to="/applied-jobs" className=" cursor-pointer">
            Applied Jobs
          </Link>
          <Link to="/service" className=" cursor-pointer">
            Services
          </Link>
          <Link to="/contact" className=" cursor-pointer">
            Contact
          </Link>
        </ul>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Sign In
        </button>
      </nav>
    </div>
  );
};

export default Header;
