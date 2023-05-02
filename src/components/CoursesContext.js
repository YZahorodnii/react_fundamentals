import React, {createContext, useState} from 'react';

export const CoursesContext = createContext();
export const CoursesProvider = ({children}) => {
    const [courses, setCourses] = useState([
        {id: 1, title: 'JavaScript Complex'},
        {id: 2, title: 'Java Complex'},
        {id: 3, title: 'Python Complex'},
        {id: 4, title: 'QA Complex'},
        {id: 5, title: 'FullStack'},
        {id: 6, title: 'Frontend'}
    ]);

    return (
        <div>
            <CoursesContext.Provider value={[courses, setCourses]}>{children}</CoursesContext.Provider>
        </div>
    );
};