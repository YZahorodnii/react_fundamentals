import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from './layouts'
import {CarsPage} from "./pages";
import {Home} from "./pages/Home";
import {Provider} from "react-redux";
import {setupStore} from "./redux";

function App() {
    const store = setupStore;
  return (
      <Provider store={store}>
          <BrowserRouter>
    <div className="App">
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/cars'}/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/cars'} element={<CarsPage/>}/>
            </Route>
        </Routes>
    </div>
          </BrowserRouter>
      </Provider>
  );
}

export {App};
