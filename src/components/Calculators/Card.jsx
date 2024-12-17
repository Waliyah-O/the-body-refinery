import React from "react";
import "./styles.css";
import heart from "../../images/heartPulse.svg";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { title, subtitle, buttonLink, buttonText } = props;
  return (
    <>
      <div className="card">
        <div className="flex">
          <img src={heart} alt="" />
          <p className="card__title">{title}</p>
        </div>
        <div className="card__content">
          <p className="card__description">
            {subtitle}
          </p>
          <Link className="btn" to={buttonLink}>{buttonText}</Link>
        </div>
      </div>
    </>
  );
};

export default Card;
