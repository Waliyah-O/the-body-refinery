import React, { useState } from "react";
import Medicals from "../features/Medicals/index";
import Sidebar from "../features/Sidebar";
import Navbar from "../features/OtherNav";

const MedicalsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <Medicals />
    </>
  );
};

export default MedicalsPage;
