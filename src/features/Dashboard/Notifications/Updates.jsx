import React from "react";
import { UilBell } from "@iconscout/react-unicons";
import "./Notifications.css";
import { UpdatesData } from "../../Data/Data";

const Notifications = () => {
  return (
    <div className="notifications">
      {UpdatesData.map((update) => {
        return (
          <div className="notification">
            <UilBell />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
