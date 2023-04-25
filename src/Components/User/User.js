import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>id:{id}</div>
            <Link to={`/layout/users/${user.id}`} state={{...user}}>
                <div>name:{name}</div>
            </Link>
            <div>username:{username}</div>
            <div>email:{email}</div>

        </div>
    )
        ;
};

export default User;