import React from "react";
import Content from "../components/Content";
import Menu from "../components/Menu";
import Banner from "../components/Banner";

const Dashboard = () => {
  return (
    <div className="min-h-full">
      <Menu />
      <Banner/>
      <Content />
    </div>
  );
};

export default Dashboard;
