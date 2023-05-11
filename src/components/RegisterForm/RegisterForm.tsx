import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces";
import {authValidator} from "../../validators";
import {joiResolver} from "@hookform/resolvers/joi";
import {useAppDispatch} from "../../hooks";
import {authAction} from "../../redux";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {

    const {register, handleSubmit, reset, formState: {isValid, errors}} = useForm<IAuth>({mode: 'all', resolver: joiResolver(authValidator)});
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const registerUser: SubmitHandler<IAuth> = async (user) => {
        // eslint-disable-next-line no-empty-pattern
        const {meta: {requestStatus}} = await dispatch(authAction.register(user));
        if (requestStatus === 'fulfilled') {
            navigate('login')
        }
    }

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button disabled={!isValid}>register</button>
            {Object.keys(errors).length>0 && <div>{Object.values(errors)[0].message}</div>}
        </form>
    );
};

export {RegisterForm};