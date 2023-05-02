import Header from "./components/Header";
import CoursesPage from "./pages/CoursesPage";
import {CoursesProvider} from "./components/CoursesContext";
import CoursesAdd from "./components/CoursesAdd";

function App() {
    return (
        <div className="App">
            <CoursesProvider>
                <Header/>
                <CoursesAdd/>
                <CoursesPage/>
            </CoursesProvider>
        </div>
    );
}

export default App;
