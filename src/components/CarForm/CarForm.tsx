import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";

const CarForm:FC = () => {
    const {reset, handleSubmit, register, setValue} = useForm<ICar> ();
    const dispatch = useAppDispatch();
    const {carForUpdate} = useAppSelector(state => state.carReducer);

    const save: SubmitHandler<ICar> =  async (car) => {
        await dispatch(carActions.createCar({car}))
        reset()
    }

    const update: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.updateCar({id: carForUpdate.id, car}))
        reset()
    }

    useEffect(() => {
        if(carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate?update:save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate?'update':'save'}</button>
            </form>
        </div>
    );
};

export {CarForm};