import React, {useEffect, useState} from 'react';
import Car from "../Car/Car";
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import CarForm from "../CarForm/CarForm";
import {axiosService} from "../../services/axios.service";

const Cars = () => {
    console.log(axiosService);
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [])
    return (
        <div>
            <CarForm/>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }

        </div>
    );
};

export default Cars;