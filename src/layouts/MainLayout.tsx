import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header";

const MainLayout: FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};