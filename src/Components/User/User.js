// import React, {useState} from 'react';

const User = ({user, setUserId}) => {
    const {id,name,username,email,website} = user;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>website:{website}</div>
            <button onClick={
                ()=> setUserId(id)}>Posts</button>
            <hr/>
        </div>
    );
};

export default User;
//вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)