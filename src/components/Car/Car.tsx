import React, {FC} from 'react';
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";
interface IProps{
    car: ICar
}
const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>{id}</div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>delete</button>
            <br/>
            <hr/>
        </div>
    );
};

export {Car};