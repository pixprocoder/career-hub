import React from "react";
import { jobs } from "../utils/jobs/jobsData";
import SingleJob from "./SingleJob";

const FeatureJobs = () => {
  return (
    <section className="py-12 my-32">
      <div className="container mx-auto px-4">
        <div className="text-center ">
          <h2 className="text-3xl lg:text-6xl text-blue-400 font-bold mb-4">
            Job Categories
          </h2>
          <p className="text-lg text-gray-700 font-light mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <SingleJob key={job.id} job={job} />
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-8 block  mx-auto">
          View All Jobs
        </button>
      </div>
    </section>
  );
};

export default FeatureJobs;
