import {Provider} from "react-redux";
import {setupStore} from "./redux/store";
import MainLayout from "./layouts/MainLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CommentsPage from "./pages/CommentsPage";
import UsersPage from "./pages/UsersPage";
import CarsPage from "./pages/CarsPage";

function App() {
    const store = setupStore();
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route path={'/users'} element={<UsersPage/>}/>
                        <Route path={'/comments'} element={<CommentsPage/>}/>
                        <Route path={'/cars'} element={<CarsPage/>}/>
                    </Route>


                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
