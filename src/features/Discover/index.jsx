import React from "react";
import Card from "./Card";

import BackGround from "../BG";
import {
  DiscoverContainer,
  DiscoverWrapper,
  Header,
  DiscoverForm,
  Input,
  Body,
  BodyContainer,
  DiscoverCards,
} from "./DiscoverElements";

const Discover = () => {
  const discoverArray = [
    {
      title: "Medicals",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem.",
      buttonText: "Get Started",
      buttonLink: "/medicals",
    },
    {
      title: "Nutrition",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem.",
      buttonText: "Get Started",
      buttonLink: "/nutrition",
    },
    {
      title: "Calculators",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem.",
      buttonText: "Get Started",
      buttonLink: "/calculators",
    },
    {
      title: "Exercises",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, exercitationem.",
      buttonText: "Get Started",
      buttonLink: "/exercises",
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
                {discoverArray.map((items, index) => (
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

export default Discover;
