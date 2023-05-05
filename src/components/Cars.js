import React, {useEffect} from 'react';
import {carsService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {carsAction} from "../redux/slices/car.slice";
import Car from "./Car";

const Cars = () => {
    const {cars, trigger, carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    console.log(cars);
    useEffect(() => {
        carsService.getAll.then(value => value.data).then(value => dispatch(carsAction.setAll(value)))
    }, [dispatch, trigger])
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};