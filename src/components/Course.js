import React from "react";
const Course = ({course}) => {
    const {id, title} = course;
    const deleteLang = (item) => {
        console.log(item);
    }
    return (
        <div>
            <ul>
            <li>{title}<button onClick={deleteLang(course)}>delete</button></li>
            </ul>
        </div>
    )
}

export default Course