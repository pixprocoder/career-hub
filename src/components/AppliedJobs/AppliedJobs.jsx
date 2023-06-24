import React from "react";
import { getAppliedJobs } from "../utils/FakeDb";
import SubHero from "../Header/SubHero/SubHero";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const appliedJobs = getAppliedJobs();
  console.log(appliedJobs);
  return (
    <section>
      <SubHero />
      <div className=" flex gap-6 flex-col">
        {appliedJobs.map((el) => (
          <>
            <div className="shadow-md my-10 rounded-lg flex justify-between p-10 items-center ">
              <div className="flex gap-10 items-center">
                <div className="bg-gray-200 w-32 flex justify-center items-center p-4 rounded-md h-32">
                  <img src={el.logo} className="mb-2" alt="" />
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-xl text-gray-800 font-semibold">
                    {el.name}
                  </h3>
                  <p className="text-gray-600">{el.companyName}</p>
                  <div className="flex my-4">
                    <button className="px-2 py-1 border rounded-lg ">
                      {el.jobType.option2}
                    </button>
                    <button className="px-2 py-1 border rounded-lg ">
                      {el.jobType.option2}
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <p>{el.location}</p>
                    <p>{el.salary}</p>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  to={`/job-details/${el.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppliedJobs;
