import React, { useState } from "react";
import Video from "../../videos/video (240p).mp4";
import { Button } from "../Button/ButtonElements";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroP,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg loop muted autoPlay src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Transform Your Body</HeroH1>
        <HeroH1>Transform Your Life</HeroH1>
        <HeroP>
        With a focus on refining both physical and mental well-being, we emphasize a supportive community and professional guidance to help you achieve your fitness goals.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            to="register"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
