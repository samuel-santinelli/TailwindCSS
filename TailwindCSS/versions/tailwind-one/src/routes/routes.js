import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Profile from "../views/Profile";

function OurRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Dashboard />} exact />
        <Route path={"/ViewProfile"} element={<Profile />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default OurRoutes;
