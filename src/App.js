import {useEffect} from "react";
import axios from "axios";
import Cars from "./components/cars/Cars";
// import CarForm from "./components/CarForm/CarForm";

function App() {
    useEffect(() => {
        axios('owu.linkpc.net/carsAPI/v1')
    }, [])
    return (
        <div>
            <Cars/>
        </div>
    );
}

export default App;
