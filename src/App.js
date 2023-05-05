import {Route, Routes} from "react-router-dom";
import {MainLayout} from './layouts'
import {CarsPage} from "./pages";
import {Home} from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index Navigate to={'/home'}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/cars'} element={<CarsPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export {App};
