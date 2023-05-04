import React from 'react';

const Comment = ({comment}) => {
    const {id, name, body} = comment;
    return (
        <div>
            <div>
                <ul>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{body}</li>
                </ul>
            </div>
        </div>
    );
};

export default Comment;