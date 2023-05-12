import React from 'react';
import {LoginForm} from "../components/LoginForm";
import {useSearchParams} from "react-router-dom";

const LoginPage = () => {
    const [query,] = useSearchParams();
    return (
        <div>
            {query.get('expSession')&&<h1>Session expired... please login again!!!</h1>}
            <LoginForm/>
        </div>
    );
};

export {LoginPage};