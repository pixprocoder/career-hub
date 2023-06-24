import React from "react";
import vector from "../../../assets/images/vector.png";
import vector1 from "../../../assets/images/vector-1.png";

const SubHero = () => {
  return (
    <div className="flex justify-between  items-center">
      <img src={vector} alt="" />
      <h1 className="text-3xl text-blue-400 font-bold">Job Details</h1>
      <img src={vector1} alt="" />
    </div>
  );
};

export default SubHero;
