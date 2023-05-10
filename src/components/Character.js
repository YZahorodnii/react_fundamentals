import React from 'react';

const Character = ({character}) => {
    const {id, name, status, image} = character;
    return (
        <div>

                <div>{id}</div>
                <div>{name}</div>
                <div>{status}</div>
            <img src={image} alt=""/>
            
        </div>
    );
};

export {Character};