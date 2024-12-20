import React, { useState } from "react";
import Discover from "../features/Discover";

import Sidebar from "../features/Sidebar";
import Navbar from "../features/OtherNav";

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
