import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsAction} from "../redux/slices";

const CarsForm = () => {
    const {register, reset, setValue, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate, } = useSelector(state => state.cars);
    const save = async (car) => {
        await dispatch(carsAction.create({car}));
        reset();
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    const update = async (car) => {
        await dispatch(carsAction.update({id: carForUpdate.id, car}))
        reset()
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

export {CarsForm};