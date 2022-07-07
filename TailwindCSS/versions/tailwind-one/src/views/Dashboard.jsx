import React from "react";
import Content from "../components/Content";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import TrackingStatus from "../components/TrackingStatus";

const Dashboard = () => {
  return (
    <div className="min-h-full">
      <Menu />
      <Banner/>
      <Content />
      <TrackingStatus/>
    </div>
  );
};

export default Dashboard;
