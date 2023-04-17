import React, {useState} from 'react';

const Post = ({post}) => {
    let[show, setShow] = useState(false)
    const{id,title,body,userId} = post;
    return (
        <div>
            <div>id: {id} </div>
            <div>{title}</div>
            <button onClick={()=>setShow(prev => !prev)}>details</button>

            {
                show &&
            <div>
               <div>{userId}</div>
                <div>{id}</div>
                <div>{title}</div>
                <div>{body}</div>
            </div>
            }
            <hr/>
        </div>
    );
};

export default Post;