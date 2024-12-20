import React from "react";
import BackGround from "../BG";
import Card from "./Card";

import {
  DiscoverContainer,
  DiscoverWrapper,
  Header,
  DiscoverForm,
  Input,
  Body,
  BodyContainer,
  DiscoverCards,
} from "../Discover/DiscoverElements";

const Medicals = () => {
  const medArray = [
    {
      title: "Consult a Doctor",
      subtitle:
        "Connect with a doctor",
      buttonText: "Get Started",
      buttonLink: "/chat",
    },
    {
      title: "Book lab test",
      subtitle:
        "Make an appointment with a lab",
      buttonText: "Get Started",
      buttonLink: "",
    },
    {
      title: "Track Results",
      subtitle:
        "Lorem ipsum dolor sit amet.",
      buttonText: "Get Started",
      buttonLink: "",
    },
    {
      title: "Drug Info",
      subtitle:
        "Lorem ipsum dolor sit amet.",
      buttonText: "Get Started",
      buttonLink: "/druginfo",
    },
    
  ];

  return (
    <>
      <BackGround />
      <DiscoverContainer>
        <DiscoverWrapper>
          <Header>
            <DiscoverForm>
              <Input type="text" placeholder="search..." />
            </DiscoverForm>
          </Header>
          <Body>
            <BodyContainer>
              <DiscoverCards>
                {medArray.map((items, index) => (
                  <Card key={index} {...items} />
                ))}
              </DiscoverCards>
            </BodyContainer>
          </Body>
        </DiscoverWrapper>
      </DiscoverContainer>
    </>
  );
};

export default Medicals;
