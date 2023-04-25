import React, {useEffect, useState} from 'react';
import axios from "axios";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import {Outlet} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => {setUsers([...value])})
    }, [users])
    return (
        <div>
            <h3>User details</h3>
            <Outlet/>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }

        </div>
    );
};

export default Users;