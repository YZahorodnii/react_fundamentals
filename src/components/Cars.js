import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {axiosServiceCars, carsService} from "../services";
import {carsAction} from "../redux/slices";
import Car from "./Car";

const Cars = () => {
    const dispatch = useDispatch;
    // const {cars} = useSelector(state => state.cars);
    const [cars, setCars] = useState();
    console.log(cars);
    useEffect(() => {
        carsService.getAll().then(value => value.data).then(value => setCars([value]))
    }, [dispatch])
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};