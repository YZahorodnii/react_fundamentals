import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarPage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/cars'}/>}/>
                    <Route path={'/cars'} element={<CarPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;