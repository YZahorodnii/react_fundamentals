import React from 'react';
import Header from "../components/Header";
import CarsPage from "../pages/CarsPage";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;