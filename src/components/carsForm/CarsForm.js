import React, {useEffect} from 'react';
import {set, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsService} from "../../services";
import {carsAction} from "../../redux/slices";

const CarsForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])
    const save = async (car) => {
        await carsService.create(car);
        dispatch(carsAction.changeTrigger());
        reset();
    }

    const update = async (car) => {
        await carsService.updateById(carForUpdate.id, car)
        dispatch(carsAction.changeTrigger())
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export default CarsForm;