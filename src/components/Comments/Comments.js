import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";
import {axiosServiceComments} from "../../services/axios.service";
import {commentService} from "../../services/comment.service";
import CommentForm from "../CommentForm/CommentForm";

const Comments = () => {
    const [comments, setComments] = useState([]);
    let [allComments, setAllComments] = useState([])
    let [commentForUpdate, setCommentForUpdate] = useState(null)
    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    }, [allComments])
    return (
        <div>
            <CommentForm setAllComments={setAllComments} commentForUpdate={commentForUpdate}/>
            {
                comments.map(comment => <Comment comment={comment} setCommentForUpdate={setCommentForUpdate} key={comment.id}/>)
            }
        </div>
    );
};

export default Comments;