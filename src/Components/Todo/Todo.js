import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Todo = ({todo}) => {
    const {id, userId, title, completed} = todo;
    return (
        <div>
            <Outlet/>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>completed:{completed}</div>
        </div>
    );
};

export default Todo;