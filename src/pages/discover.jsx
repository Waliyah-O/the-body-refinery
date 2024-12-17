import React, { useState } from "react";
import Discover from "../components/Discover";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/OtherNav";

const DiscoverPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <Discover />
    </>
  );
};

export default DiscoverPage;
