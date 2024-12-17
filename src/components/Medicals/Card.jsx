import React from "react";
import { DiscoverCard, Title, Subtitle } from "../Discover/DiscoverElements";
import {Button} from '../Button/ButtonElements'

const Card = (props) => {
  const {title, subtitle, buttonLink, buttonText} = props
  return (
    <DiscoverCard>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button to={buttonLink}>{buttonText}</Button>
    </DiscoverCard>
  );
};

export default Card;
