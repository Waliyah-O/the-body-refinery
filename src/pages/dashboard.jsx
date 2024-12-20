import React from "react";

import Sidebar from "../features/Dashboard/Sidebar";
import MainDash from "../features/Dashboard/MainDash/MainDash";
import RightSide from "../features/Dashboard/RightSide/RightSide";

const DashboardPage = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
};

export default DashboardPage;
