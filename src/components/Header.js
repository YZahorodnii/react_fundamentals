import React, {useContext} from 'react';
import {CoursesContext} from "./CoursesContext";

const Header = () => {
    const [courses, setCourses] = useContext(CoursesContext);
    return (
        <div style={{background: 'black', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
            <h3>YZagor</h3>
            <p>List of the courses: {courses.length} </p>
        </div>
    );
};

export default Header;