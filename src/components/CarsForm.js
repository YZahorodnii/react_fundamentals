import React from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../services";
import {useDispatch} from "react-redux";
import {carsAction} from "../redux/slices/car.slice";

const CarsForm = () => {
    const {register, reset, setValue, handleSubmit} = useForm();

    const dispatch = useDispatch();

    const save = async (car) => {
        const {data} = await carsService.create(car);
        dispatch(carsAction.setAll(data));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export default CarsForm;