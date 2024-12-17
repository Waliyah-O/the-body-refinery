import React, { useState } from "react";
import Nutrition from "../components/Nutrition/index";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/OtherNav";

const NutritionPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <Nutrition />
    </>
  );
};

export default NutritionPage;
