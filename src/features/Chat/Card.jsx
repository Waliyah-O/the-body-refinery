import React from "react";
import { DiscoverCard, Title } from "../Discover/DiscoverElements";
import {Button} from '../Button/ButtonElements'

const Card = (props) => {
  const {title, buttonLink, buttonText} = props
  return (
    <DiscoverCard>
      <Title>{title}</Title>
      <Button to={buttonLink}>{buttonText}</Button>
    </DiscoverCard>
  );
};

export default Card;
