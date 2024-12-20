import React, { useState } from "react";
import Nutrition from "../features/Nutrition/index";
import Sidebar from "../features/Sidebar";
import Navbar from "../features/OtherNav";

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
