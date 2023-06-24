import React from "react";

const Categories = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mb-4">
          Next Section Headline
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Card 1</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Card 2</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Card 3</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Card 4</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
