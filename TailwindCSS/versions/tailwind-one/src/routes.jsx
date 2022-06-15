import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard"

const OurRotes = () => {
  <Routes>
    <Route path="/" element={<Dashboard/>} exact/>
  </Routes>
}

export default OurRotes;