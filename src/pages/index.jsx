import React, { useState } from "react";
import Sidebar from "../features/Sidebar";
import Navbar from "../features/Navbar";
import HeroSection from "../features/HeroSection";
import InfoSection from "../features/InfoSection";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../features/InfoSection/Data";
import Services from "../features/Services";
import Footer from "../features/Footer";
import GymHomePage from "../features/Home";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GymHomePage />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Footer /> */}
    </>
  );
};

export default Home;
