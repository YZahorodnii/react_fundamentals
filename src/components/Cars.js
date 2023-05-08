import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsAction} from "../redux/slices";
import {Car} from "./Car";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    console.log(cars);
    useEffect(() => {
        dispatch(carsAction.getAll())
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