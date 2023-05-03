import React from 'react';

const User = ({user}) => {

    const {id, name, email} = user;
    return (
        <div>
            <div>
                <ul>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{email}</li>
                </ul>
            </div>
        </div>
    );
};

export default User;