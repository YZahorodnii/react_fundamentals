import React, {useContext} from "react";
import {CoursesContext} from "./CoursesContext";
const Course = ({course}) => {
    const {id, title} = course;
    const [courses, setCourses] = useContext(CoursesContext);
    const deleteLang = () => {
        const courseIdForDelete = course.id;
        const indexCourseForDelete = courses.findIndex(value => value.id === courseIdForDelete);
        courses.splice(indexCourseForDelete, 1);
        setCourses([...courses])
    }
    return (
        <div>
            <ul>
            <li>{title}<button onClick={deleteLang}>delete</button></li>
            </ul>
        </div>
    )
}

export default Course