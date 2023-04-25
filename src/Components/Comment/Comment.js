import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>

            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <Link to={postId.toString()} state={{...comment}}>
                <div>name:{name}</div>
            </Link>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <br/>
        </div>

    )
        ;
};

export default Comment;