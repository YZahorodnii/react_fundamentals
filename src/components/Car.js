import React from 'react';
import {useDispatch} from "react-redux";
import {carsAction} from "../redux/slices";
import {carsService} from "../services";
import css from './PageElements.module.css'

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteCar = async (car) => {
        await carsService.deleteById(car.id)
        dispatch(carsAction.changeTrigger())
    }

    return (
        <div className={css.PageElements}>
            <ul>
                <li>{id}</li>
                <li>{brand}</li>
                <li>{price}</li>
                <li>{year}</li>
                <button onClick={() => dispatch(carsAction.setCarForUpdate(car))}>update</button>
                <button onClick={() => deleteCar(car)}>delete</button>
            </ul>
        </div>
    );
};

export default Car;