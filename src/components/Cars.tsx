import React, {useEffect, useState} from 'react';
import Car from "./Car";
import {carsService} from "../services";
import {ICar} from "../interfaces";
import CarsForm from "./CarsForm";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        carsService.getAll().then(value => value.data).then(value => setCars(value))
    }, [])
    return (
        <div>
            <CarsForm/>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default Cars;