import React from 'react';
import character from "./Character";

const Character = ({character}) => {
    const {id,name,status,species,gender,image} = character;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>status:{status}</div>
            <div>species:{species}</div>
            <div>gender:{gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;