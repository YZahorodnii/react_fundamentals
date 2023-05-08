import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={css.Header}>
            <NavLink to={'/home'}>Home</NavLink>
            <button onClick={() => navigate('/cars')}>cars</button>
        </div>
    );
};

export {Header};