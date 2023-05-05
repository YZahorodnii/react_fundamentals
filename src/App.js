import {Route, Routes} from "react-router-dom";
import MainLayout from './layouts/MainLayout'
import CarsPage from "./pages/CarsPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index Navigate to={'/'}/>
                <Route path={'/home'} element={<MainLayout/>}/>
                <Route path={'/cars'} element={<CarsPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
