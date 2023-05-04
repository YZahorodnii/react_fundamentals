import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsService} from "../services";
import {carsAction} from "../redux/slices";
import Car from "./Car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.cars);
    console.log(cars);
    useEffect(() => {
        carsService.getAll().then(value => value.data).then(value => dispatch(carsAction.setAll(value)))
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