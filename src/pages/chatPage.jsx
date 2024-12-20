import React, { useState } from "react";
import Sidebar from "../features/Sidebar";
import Navbar from "../features/OtherNav";
import DoctorConnect from "../features/Chat";

const ChatPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <DoctorConnect />
    </>
  );
};

export default ChatPage;
