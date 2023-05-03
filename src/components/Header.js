//Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на
// http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на
// http://jsonplaceholder.typicode.com/comments
//
//
// http://owu.linkpc.net/carsAPI/v1/doc
// Реалізувати створення, видалення та оновлення машин

import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
            <NavLink to={'/cars'}>Cars</NavLink>
            <Outlet/>
        </div>
    );
};

export {Header};