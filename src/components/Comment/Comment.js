import React from 'react';

const Comment = ({comment, setCommentForUpdate}) => {
    let {postId, id, name, email, body} = comment
    return (
        <div>
            <div>Post id:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button onClick={ () => setCommentForUpdate(comment)}>update</button>
            <hr/>
        </div>
    );
};

export default Comment;