import React, {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};