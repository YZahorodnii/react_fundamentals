import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {Outlet} from "react-router-dom";

const Posts = () => {
    const[posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => setPosts([...value]))
    }, [])
    return (
        <div>
            <div>
                <h3>Post details</h3>
                <Outlet/>
            </div>
            <h3>All posts</h3>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }


        </div>
    );
};

export default Posts;