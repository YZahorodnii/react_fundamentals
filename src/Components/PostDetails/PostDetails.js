import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

const PostDetails = () => {
    const location = useLocation();
    return (
        <div>
            {JSON.stringify(location.state)}
        </div>
    );
};

export default PostDetails;