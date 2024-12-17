import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/OtherNav";
import Exercises from "../components/Exercises";

const ExercisesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <Exercises />
    </>
  );
};

export default ExercisesPage;
