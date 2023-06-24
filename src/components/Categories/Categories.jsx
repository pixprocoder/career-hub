import React from "react";
import { categories } from "../utils/FeatureJobs/categories";
import Category from "./category";

const Categories = () => {
  return (
    <section className="py-12 my-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-3xl lg:text-6xl text-blue-400 font-bold mb-4">
            Feature Jobs
          </h2>
          <p className="text-lg  px-56 text-gray-700 font-light mb-8">
            This is the list of all the jobs that are featured on our website.
            You can apply for these jobs and get hired. are featured on our
            website. You can apply for these jobs and get hired.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
