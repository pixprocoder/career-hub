import React from "react";
import vector from "../../../assets/images/vector.png";
import vector1 from "../../../assets/images/vector-1.png";

const SubHero = () => {
  return (
    <div className="hidden lg:flex justify-between  items-center">
      <img src={vector} alt="" />
      <img src={vector1} alt="" />
    </div>
  );
};

export default SubHero;
