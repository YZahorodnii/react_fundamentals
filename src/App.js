// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти

import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import PostsPage from "./Pages/PostsPage";
import CommentsPage from "./Pages/CommentsPage";
import CatDogPage from "./Pages/CatDogPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                {/*<Route index element={<Navigate to={'posts'}/>}/>*/}
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'cats_dogs'} element={<CatDogPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
