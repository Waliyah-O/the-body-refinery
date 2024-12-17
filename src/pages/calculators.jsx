import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/OtherNav";
import Calculators from "../components/Calculators";

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
