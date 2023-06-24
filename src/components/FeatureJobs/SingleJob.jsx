/* eslint-disable react/prop-types */
import React from "react";
import locationImage from "../../assets/Icons/Frame-4.png";
import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
  const { name, logo, companyName, salary, location, experience, jobType, id } =
    job;
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex flex-col ">
        <img width={100} src={logo} className="mb-2" alt="" />
        <h3 className="text-xl text-gray-800 font-semibold">{name}</h3>
        <p className="text-gray-600">{companyName}</p>
      </div>
      <div className="flex justify-between items-center my-4">
        <div className="flex space-x-2">
          <span className="px-2 py-1 border rounded-lg ">
            {jobType.option1}
          </span>
          <span className="px-2 py-1 border rounded-lg ">
            {jobType.option2}
          </span>
        </div>
        <p className="text-gray-600 text-xl">{experience}</p>
      </div>
      <div className="flex justify-between my-4">
        <div className="flex space-x-2 justify-center items-center">
          <img src={locationImage} alt="" />
          <p>{location}</p>
        </div>
        <p className="text-gray-600">{salary}</p>
      </div>

      <Link
        to={`/job-details/${id}`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded my-2"
      >
        View Details
      </Link>
    </div>
  );
};

export default SingleJob;
