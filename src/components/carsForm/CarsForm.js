import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carsService} from "../../services";
import {carsAction} from "../../redux/slices";

const CarsForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();

    const save = async (car) => {
        const {data} = await carsService.getAll();
        console.log(car);
        dispatch(carsAction.changeTrigger(data));
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