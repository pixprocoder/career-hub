/* eslint-disable react/prop-types */
import React from "react";
import locationImage from "../../assets/Icons/Frame-4.png";

const SingleJob = ({ job }) => {
  const { name, logo, companyName, salary, location, experience, jobType } =
    job;
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={logo} alt="" />
      <h3 className="text-xl text-gray-800 font-semibold my-2">{name}</h3>
      <p className="text-gray-600">{companyName}</p>
      <div className="flex justify-between my-2">
        <div className="flex space-x-2 justify-center items-center">
          <img src={locationImage} alt="" />
          <p>{location}</p>
        </div>
        <p className="text-gray-600">{salary}</p>
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="flex space-x-2">
          <button className="px-2 py-1 border rounded-lg ">
            {jobType.option1}
          </button>
          <button className="px-2 py-1 border rounded-lg ">
            {jobType.option2}
          </button>
        </div>
        <p className="text-gray-600 text-xl">{experience}</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ">
        View Details
      </button>
    </div>
  );
};

export default SingleJob;
