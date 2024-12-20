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
      title: "BMI",
      subtitle:
        "The BMI calculator is a useful tool that measures whether you are overweight, underweight, or just right. Your weight alone is not enough to tell, as a tall, skinny man may easily weigh more than a short but rotund woman. ",
      buttonText: "Get Started",
      buttonLink: "/bmicalc",
    },
    {
      title: "calories",
      subtitle:
        "The calorie calculator help you determine how many calories should you eat a day – or what your starting point is if you want to gain or lose weight.",
      buttonText: "Get Started",
      buttonLink: "/calorieloss",
    },
    {
      title: "weight",
      subtitle:
        "Adjusted body weight is used for calculating a person's nutritional needs. It is especially useful when the patient is overweight or obese",
      buttonText: "Get Started",
      buttonLink: "",
    },
    {
      title: "Lorem",
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
