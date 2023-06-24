import React from "react";

const FeatureJobs = () => {
  return (
    <section className="bg-gray-200 py-12 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mb-4">
          Job Categories
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              Category 1
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              Category 2
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              Category 3
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              Category 4
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              Category 5
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              Category 6
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-8">
          View All Categories
        </button>
      </div>
    </section>
  );
};

export default FeatureJobs;
