import React, { useState } from "react";
import Sidebar from "../features/Sidebar";
import Navbar from "../features/OtherNav";
import Calculators from "../features/Calculators";

const CalculatorsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <Calculators />
    </>
  );
};

export default CalculatorsPage;
