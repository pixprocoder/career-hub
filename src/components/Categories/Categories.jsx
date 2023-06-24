import React from "react";
import { categories } from "../utils/FeatureJobs/categories";
import Category from "./category";

const Categories = () => {
  return (
    <section className="py-12 my-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mb-4">
            Next Section Headline
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor.
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
