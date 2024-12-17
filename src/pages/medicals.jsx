import React, { useState } from "react";
import Medicals from "../components/Medicals/index";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/OtherNav";

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
