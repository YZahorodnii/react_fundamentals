import React from 'react';

const UserPosts = ({post}) => {
    let {userId,id,title,body} = post;
    return (
        <div>
            <div>id:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export default UserPosts;