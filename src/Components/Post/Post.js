import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {userId, id, title, body} = post;
    let navigate = useNavigate();
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={() => {
                navigate(id.toString())
            }
            }>Post details</button>
        </div>
    );
};

export default Post;