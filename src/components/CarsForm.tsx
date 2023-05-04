import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {carsService} from "../services";

const CarsForm = () => {
    const {register, reset, handleSubmit} = useForm<ICar>();

    const save: SubmitHandler<ICar> = async (car) => {
        await carsService.create(car)
        reset();
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button></button>
        </form>
    );
};

export default CarsForm;