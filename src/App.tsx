import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {Users} from "./components/Users";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<Users/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;