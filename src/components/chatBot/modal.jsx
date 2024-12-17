import React, { useRef, useState, useEffect, useCallback } from "react";
import modal from "../../images/modal.svg";
import { useSpring, animated } from "react-spring";
import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalImg,
  ModalWrapper,
  InputDiv,
  Response,
} from "./ChatModalElements";

const Modal = ({ showModal, setShowModal }) => {
  const [value, setValue] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        ` http://vitalitybot.us-east-1.elasticbeanstalk.com/app/chat?text=${encodeURIComponent(
          value
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt, value }),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      setError("An error occurred while fetching data.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(10%)` : `translateY(-200%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={modal} alt="colored" />
              <ModalContent>
                <Response>
                  {error && <div>{error}</div>}
                  {responseData && <p>{responseData.text}</p>}
                </Response>
                {isLoading && <div>Loading...</div>}
                <form onSubmit={handleSubmit}>
                  <InputDiv>
                    <input
                      type="text"
                      id="value"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      required
                      placeholder="start typing..."
                    />
                    <button type="submit">Send</button>
                  </InputDiv>
                </form>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
