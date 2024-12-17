import React from "react";
import "../Calculators/styles.css";
import heart from "../../images/heartPulse.svg";

const Card = (props) => {
  const { title, subtitle, buttonLink, buttonText } = props;
  return (
    <>
      <div class="card">
        <div className="flex">
          <img src={heart} alt="" />
          <p class="card__title">{title}</p>
        </div>
        <div class="card__content">
          <p class="card__description">
            {subtitle}
          </p>
          <button className="btn" to={buttonLink}>{buttonText}</button>
        </div>
      </div>
    </>
  );
};

export default Card;
