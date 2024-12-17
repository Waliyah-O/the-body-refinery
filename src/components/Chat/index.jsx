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
} from "../Discover/DiscoverElements";

const DoctorConnect = () => {
  const cardArray = [
    {
      title: "VIDEO",
      buttonText: "Video",
      buttonLink:
        "https://video-app-6959-1313-dev.twil.io?passcode=27188869591313",
    },
    {
      title: "CHAT",
      buttonText: "Chat",
      buttonLink: "http://vitalitychat.us-east-1.elasticbeanstalk.com",
    },
    {
      title: "VIDEO",
      buttonText: "Video",
      buttonLink: "http://vitalitychat.us-east-1.elasticbeanstalk.com",
    },
    {
      title: "CHAT",
      buttonText: "Chat",
      buttonLink: "http://vitalitychat.us-east-1.elasticbeanstalk.com",
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
                {cardArray.map((items, index) => (
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

export default DoctorConnect;
