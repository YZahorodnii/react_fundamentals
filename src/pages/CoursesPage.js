import React, {useContext} from 'react';
import Course from "../components/Course";
import {CoursesContext} from "../components/CoursesContext";
import css from '..//components/Main.module.css'

const CoursesPage = () => {
    const [courses, setCourses] = useContext(CoursesContext);

    return (
        <div>
            {
                courses.map(course => <Course key={course.id} course={course}/>)
            }
        </div>
    );
};

export default CoursesPage;