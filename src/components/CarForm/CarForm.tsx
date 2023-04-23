import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/car.interface";
import {IRes} from "../../services/axios.service";
import {carService} from "../../services/car.service";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm<ICar>();
    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        reset()
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>create</button>
        </form>
    );
};

export default CarForm;