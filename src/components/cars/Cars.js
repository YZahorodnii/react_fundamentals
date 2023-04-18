import React, {useEffect, useState} from 'react';
import Car from "../car/Car";
// import axios from "axios";
// import {axiosService} from "../../Services/axios.service";
// import {baseURL} from "../../configs/Urls";
import {carService} from "../../Services/car.service";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    let [cars, setCars] = useState([]);
    let [allCars, setAllCars] = useState(null);
    let [carForUpdate, setCarForUpdate] = useState(null);
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [allCars]);
    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
            {
                cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate}/>)
            }
        </div>
    );
};

export default Cars;