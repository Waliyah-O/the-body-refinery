import React, { useState } from "react";
import { Container, Button, GlobalStyle } from "./ChatModalElements";
import Modal from "./modal";

const ChatModal = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <Container>
        <Button onClick={openModal}>Modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
};

export default ChatModal;
