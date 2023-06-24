import React from "react";
import hero from "../../../assets/images/profile1.png";

const HeroSection = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl text-gray-900 font-bold mb-4">
            Find your dream job
            <br />
            <span>All in one place</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2">
          <img src={hero} alt="Hero Image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
