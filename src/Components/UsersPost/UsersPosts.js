import React, {useEffect, useState} from 'react';
import UserPosts from "../UserPosts/UserPosts";

const UsersPosts = ({userId}) => {
    let [posts,setPosts] = useState([])
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(allPosts => setPosts(allPosts))
    },[userId])
    return (
        <div>
            {
                posts.map(post => <UserPosts post={post}/>)
            }
        </div>
    );
};

export default UsersPosts;