import React from 'react';
import {Outlet} from "react-router-dom";

const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div>
            <div>
                <Outlet/>
            </div>
            <div>
                <div>userId:{userId}</div>
                <div>id:{id}</div>
                <div>title:{title}</div>
                <br/>
            </div>
        </div>
    );
};

export default Album;