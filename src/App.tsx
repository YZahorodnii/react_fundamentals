import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarPage, LoginPage, RegisterPage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/login'}/>}/>
                    <Route path={'/cars'} element={<CarPage/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;