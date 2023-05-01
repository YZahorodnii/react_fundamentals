import React, {useState} from 'react';
import Course from "./Course";

const Courses = () => {
    const initState = [
        {id: 1, title: 'JavaScript Complex'},
        {id: 2, title: 'Java Complex'},
        {id: 3, title: 'Python Complex'},
        {id: 4, title: 'QA Complex'},
        {id: 5, title: 'FullStack'},
        {id: 6, title: 'Frontend'}
    ];
    const [courses, setCourses] = useState([initState]);
    return (
        <div>
            {
                courses.map(course => <Course key={course.id} setCourses={setCourses}/>)
            }
        </div>
    );
};

export default Courses;