import React from "react";

const Header = () => {
  return (
    <div>
      <nav className=" p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-white font-semibold text-lg">Your Brand</span>
        </div>

        <ul className="flex items-center space-x-4">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">About</li>
          <li className=" cursor-pointer">Services</li>
          <li className=" cursor-pointer">Contact</li>
        </ul>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Sign In
        </button>
      </nav>
    </div>
  );
};

export default Header;
