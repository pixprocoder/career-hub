import React from "react";
import Categories from "../Categories/Categories";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import HeroSection from "../Header/Hero/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <FeatureJobs />
    </div>
  );
};

export default Home;
