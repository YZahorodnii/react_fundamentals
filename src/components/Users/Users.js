// Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
//реалізувати UPDATE з Cars
//додати кнопку DELETE коло Cars

import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import UserForm from "../UserForm/UserForm";
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value));
    }, [])
    return (
        <div>
            <UserForm users={users} setUsers={setUsers}/>
            <br/>
            {
                users.map(user => <User user={user} key={user.id}/>)
            }
        </div>
    );
};

export default Users;