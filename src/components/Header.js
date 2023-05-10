import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            RICK AND MORTY
            <NavLink to={'/characters'}>Characters</NavLink>
            <NavLink to={'/locations'}>Locations</NavLink>
        </div>
    );
};

export {Header};