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

const Calculators = () => {
  const medArray = [
    {
      title: "weight loss",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem.",
      buttonText: "Get Started",
      buttonLink: "/bmicalc",
    },
    {
      title: "Gain Muscle Mass",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem.",
      buttonText: "Get Started",
      buttonLink: "",
    },
    {
      title: "Burn Belly Fat",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem.",
      buttonText: "Get Started",
      buttonLink: "",
    },
    {
      title: "Stay in Shape",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem.",
      buttonText: "Get Started",
      buttonLink: "",
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

export default Calculators;
