import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'cats_dogs'}>Cats&Dogs</NavLink>
        </div>
    );
};

export default Header