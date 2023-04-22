// Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments

//реалізувати UPDATE з Cars
//додати кнопку DELETE коло Cars

import React, {useEffect, useState} from 'react';
import User from "../User/User";
import {axiosService} from "../../services/axios.service";
import {userService} from "../../services/user.service";
import UserForm from "../UserForm/UserForm";

const Users = () => {
    const [users, setUsers] = useState([])
    const [allUsers, setAllUsers] = useState(null)
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value));
    }, [allUsers])
    return (
        <div>
            <UserForm setAllUsers={setAllUsers}/>
            <br/>
            {
                users.map(user => <User user={user} key={user.id}/>)
            }
        </div>
    );
};

export default Users;