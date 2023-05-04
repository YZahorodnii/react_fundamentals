import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import carsForm from "./carsForm/CarsForm";
import {carsAction, carsReducer} from "../redux/slices";
import {carsService} from "../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteCar = async (car) => {
        await carsService.deleteById(car.id)
        dispatch(carsAction.changeTrigger())
    }

    return (
        <div>
            <div>
                <ul>
                    <li>{id}</li>
                    <li>{brand}</li>
                    <li>{price}</li>
                    <li>{year}</li>
                    <button onClick={() => dispatch(carsAction.setCarForUpdate(car))}>update</button>
                    <button onClick={() => deleteCar(car)}>delete</button>
                </ul>
            </div>
        </div>
    );
};

export default Car;