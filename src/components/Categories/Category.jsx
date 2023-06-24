/* eslint-disable react/prop-types */
import React from "react";

const Category = ({ category }) => {
  const { name, image, title } = category;
  return (
    <div className="bg-white p-6 rounded shadow-lg">
      <img src={image} alt={name} className="" />
      <h3 className="text-xl my-4 text-gray-800 font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default Category;
