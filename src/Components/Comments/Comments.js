import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";
import {commentService} from "../../services/comment.service";
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments([...value]));
    }, [])
    return (
        <div>
            <h3>Review comments</h3>
            <h4>Review post</h4>
            <Outlet/>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;