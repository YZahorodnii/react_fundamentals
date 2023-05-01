import React from 'react';
import {NavLink} from "react-router-dom";
// import {Header.module.css} from './Header.module.css'
import css from "../Header/Header.module.css"
const Header = () => {
    return (
        <div>
            <div className={css.Header}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'cats_dogs'}>Cats&Dogs</NavLink>
            </div>
            <hr/>
        </div>
    );
};

export default Header