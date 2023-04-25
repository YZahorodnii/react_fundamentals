import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Todo = () => {
    return (
        <div>
            <h3>Sub page menu</h3>
            <ul>
                <li><Link to={'users'}>users page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
                <li><Link to={'comments'}>comments page</Link></li>
            </ul>

            <div>
                <h3>view</h3>
                <Outlet/>
            </div>

        </div>
    );
};

export default Todo;