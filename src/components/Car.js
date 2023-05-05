import React from 'react';
import {carsService} from "../services";
import {useDispatch} from "react-redux";
import {carsAction} from "../redux/slices";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteCar = async (car) => {
        await carsService.deleteById(car.id);
        dispatch(carsAction.changeTrigger())
    }

    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{brand}</li>
                <li>{price}</li>
                <li>{year}</li>
                <button onClick={() => deleteCar(car)}>delete</button>
                <button onClick={() => dispatch(carsAction.setCarForUpdate(car))}>update</button>
            </ul>
        </div>
    );
};

export {Car};