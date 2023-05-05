import {Route, Routes} from "react-router-dom";
import MainLayout from './layouts/MainLayout'
import CarsPage from "./pages/CarsPage";
import Home from "./pages/Home";

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

export default App;
