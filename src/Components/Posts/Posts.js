import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";

const Posts = () => {
    let [posts, setPosts] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value=> value.json())
            .then(allPosts => setPosts(allPosts))
    }, [])
    return (
        <div>
            {
                posts.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
    );
};

export default Posts;

// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)