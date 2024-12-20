import React, { useState } from "react";
import Sidebar from "../features/Sidebar";
import Navbar from "../features/OtherNav";
import Exercises from "../features/Exercises";

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
