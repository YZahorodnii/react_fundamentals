import {Header, Users, Comments} from "./components";
import {Provider} from "react-redux";
import {setupStore} from "./redux/store";
import MainLayout from "./layouts/MainLayout";

function App() {
    const store = setupStore();
    return (
        <Provider store={store}>
            <div className="App">
                <MainLayout/>
            </div>
        </Provider>
    );
}

export default App;
