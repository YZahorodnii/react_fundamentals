// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
// albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
// comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
// при натисканні на комментар тягнеться пост, до якого належіить цей коментар. приклад запиту
//                                                          https://jsonplaceholder.typicode.com/posts/ID
// id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.


import {Link, Route, Routes} from "react-router-dom";
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Comments from "./Components/Comments/Comments";
import UserDetails from "./Components/UserDetails/UserDetails";
import PostDetails from "./Components/PostDetails/PostDetails";
import Albums from "./Components/Albums/Albums";
import Todo from "./Components/Todo/Todo";
import Todos from "./Components/Todos/Todos";
import Post from "./Components/Post/Post";

function App() {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/todos'}>Todos</Link></li>
                <li><Link to={'/albums'}>Albums</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}>
                    <Route path={':id'} element={<PostDetails/>}/>
                </Route>
            </Routes>





            {/*<div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/layout'}>Layout</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>

            </div>

            <div>
                <h3>View</h3>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/layout'} element={<Layout/>}>
                        <Route path={'users'} element={<Users/>}>
                            <Route path={':id'} element={<UserDetails/>}/>
                        </Route>
                        <Route path={'posts'} element={<Posts/>}>
                            <Route path={':id'} element={<PostDetails/>}/>
                        </Route>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
            </div>*/}
        </div>
    );
}

export default App;
