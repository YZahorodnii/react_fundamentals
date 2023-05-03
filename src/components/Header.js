//Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на
// http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на
// http://jsonplaceholder.typicode.com/comments
//
//
// http://owu.linkpc.net/carsAPI/v1/doc
// Реалізувати створення, видалення та оновлення машин

import React from 'react';
import {Outlet} from "react-router-dom";

import UsersPage from "../pages/UsersPage";
import CarsPage from "../pages/CarsPage";
import CommentsPage from "../pages/CommentsPage";

const Header = () => {
    return (
        <div>
            <Outlet/>
            <UsersPage/>
            <CommentsPage/>
            <CarsPage/>
        </div>
    );
};

export {Header};