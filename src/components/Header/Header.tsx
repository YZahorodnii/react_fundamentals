import React from 'react';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div>
            <NavLink to={'/cars'}>Cars</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/register'}>Register</NavLink>
        </div>
    );
};

export {Header};