// Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments

import React from 'react';
import User from "../User/User";

const Users = () => {
    return (
        <div>
            <User/>
        </div>
    );
};

export default Users;