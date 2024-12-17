import React from "react";
import Activities from "../Activities/Activities";
import Updates from "../Notifications/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Notifications</h3>
        <Updates />
      </div>
      <div>
        <h3>Activity Level</h3>
        <Activities />
      </div>
    </div>
  );
};

export default RightSide;
