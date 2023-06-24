import React from "react";
import { jobs } from "../utils/jobs/jobsData";
import { useParams } from "react-router-dom";
import SubHero from "../Header/SubHero/SubHero";
import frame from "../../assets/Icons/frame.png";
import frame1 from "../../assets/Icons/frame-1.png";
import phone from "../../assets/Icons/Frame-2.png";
import email from "../../assets/Icons/Frame-3.png";
import location from "../../assets/Icons/Frame-4.png";

// eslint-disable-next-line react/prop-types
const JobDetails = () => {
  const allJobs = jobs;
  const { id } = useParams();
  const filteredJobs = allJobs.filter((job) => job.id === Number(id));
  const [job] = filteredJobs;

  return (
    <div>
      <SubHero />
      <div className="flex justify-around gap-6 mt-10 items-center">
        <div className="flex-1">
          <p>
            <span className="text-xl font-semibold">Job Description:</span>
            <br />
            <span className="font-light text-gray-900">
              {job.jobDescription}
            </span>
          </p>
          <p className="my-4">
            <span className="text-xl font-semibold">Job Responsibilities:</span>
            <br />
            <span className="font-light text-gray-900">
              {job.jobResponsibilities}
            </span>
          </p>
          <p className="my-4">
            <span className="text-xl font-semibold">
              Educational educationRequirements:
            </span>
            <br />
            <span className="font-light text-gray-900">
              {job.educationRequirements}
            </span>
          </p>
          <p>
            <span className="text-xl font-semibold">Experience:</span>
            <br />
            <span className="font-light text-gray-900">{job.experience}</span>
          </p>
        </div>
        <div className="flex-1 px-20">
          <div>
            <h1 className="text-xl font-semibold">Job Details</h1>
            <div className="mt-2">
              <div className="flex space-x-2">
                <img src={frame} alt="" />
                <p>Salary: {job.salary}</p>
              </div>
              <div className="flex space-x-2 mt-2">
                <img src={frame1} alt="" />
                <p>Job Title: {job.jobDetails.jobTitle}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-xl font-semibold">Contact Information</h1>
            <div className="mt-2">
              <div className="flex space-x-2">
                <img src={phone} alt="" />
                <p>Phone: {job.jobDetails.contact.phone}</p>
              </div>
              <div className="flex space-x-2">
                <img src={email} alt="" />
                <p>Email: {job.jobDetails.contact.email}</p>
              </div>
              <div className="flex space-x-2">
                <img src={location} alt="" />
                <p>Address: {job.jobDetails.contact.address}</p>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full mt-8 ">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
