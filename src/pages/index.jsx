import React, { useState } from "react";
import Sidebar from "../features/Sidebar";
import Navbar from "../features/Navbar";
import HeroSection from "../features/HeroSection";
import InfoSection from "../features/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../features/InfoSection/Data";
import Services from "../features/Services";
import Footer from "../features/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
