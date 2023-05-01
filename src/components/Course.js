import React from "react";
const Course = ({setCourses}) => {
    const {id, title} = setCourses;
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
        </div>
    )
}

export default Course