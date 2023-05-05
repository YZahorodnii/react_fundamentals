import React from 'react';
import {carsService} from "../services";
import {useDispatch} from "react-redux";
import {carsAction} from "../redux/slices/car.slice";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();
    const deleteCar = async (car) => {
        const {data} = await carsService.deleteById(car.id);
        dispatch(carsAction.changeTrigger(data))
    }

    const updateCar = async (carForUpdate) => {
        const {data} = await carsService.updateById(carForUpdate.id);
        dispatch(carsAction.setUpdate(carForUpdate(data)))
        dispatch(carsAction.changeTrigger(data))
    }

    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{brand}</li>
                <li>{price}</li>
                <li>{year}</li>
                <button onClick={() => deleteCar(car)}>delete</button>
                <button onClick={() => updateCar(car)}>update</button>
            </ul>
        </div>
    );
};

export default Car;