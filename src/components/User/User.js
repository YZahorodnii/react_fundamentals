import React from 'react';

const User = ({user}) => {
    let {id, name, username, email} = user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div> username:{username}</div>
            <div>email:{email}</div>
            <hr/>
        </div>
    );
};

export default User;