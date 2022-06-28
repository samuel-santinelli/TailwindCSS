import React from "react";
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from "../views/Dashboard";


function OurRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Dashboard/>} exact/>
        </Routes>
        </BrowserRouter>
    )
}

export default OurRoutes;



