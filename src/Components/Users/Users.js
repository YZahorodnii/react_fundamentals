import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = ({setUserId}) => {
    let[users, setUsers] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(allUsers => setUsers(allUsers))
    },[])
    return (
        <div>
            {
                users.map(user => <User user={user} setUserId={setUserId} key={user.id}/>)
            }
        </div>
    );
};

export default Users;


//вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)