import React from "react";
import hero from "../../../assets/images/profile1.png";

const HeroSection = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="lg:w-1/2">
          <div className=" mb-4">
            <p className="text-7xl mb-2   text-gray-900 font-bold">One Step</p>
            <p className="text-7xl mb-2   text-gray-900 font-bold">
              {" "}
              Closer To Your
            </p>
            <p className="text-7xl mb-2 text-blue-400 font-bold">Dream Job</p>
          </div>
          <p className="text-lg lg:text-xl font-light text-gray-700 my-8">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information. It uses
            utility classes for typography and spacing to space content out
            within the larger container.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2">
          <img src={hero} alt="Hero Image" className="w-full h-auto " />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
