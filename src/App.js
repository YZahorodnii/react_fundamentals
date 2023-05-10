import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CharactersPage} from "./pages";
import {LocationsPage} from "./pages";
import {Provider} from "react-redux";
import {setupStore} from "./redux";

function App() {
    const store = setupStore();
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<MainLayout/>}>
                            <Route index element={<Navigate to={'/characters'}/>}/>
                            <Route path={'/characters'} element={<CharactersPage/>}/>
                            <Route path={'/locations'} element={<LocationsPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
