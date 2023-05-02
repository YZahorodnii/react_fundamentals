import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {CoursesContext} from "./CoursesContext";

const CoursesAdd = () => {
    const {reset, register, handleSubmit} = useForm();
    const [language, setLanguage] = useState('');
    const [courses, setCourses] = useContext(CoursesContext);

    const addLang = (e) => {
        setLanguage(e.target.value)
    };
    const save = (e) => {
        const newLangId = courses.slice(-1)[0]?.id + 1 || 1;
        setCourses(prevCourses => [...courses, {id: newLangId, title: language}])
        console.log(courses);
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'language'} {...register('language')} onChange={addLang}/>
            <button>add</button>
        </form>
    );
};

export default CoursesAdd;