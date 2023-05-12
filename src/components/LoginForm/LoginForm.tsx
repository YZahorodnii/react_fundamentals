import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {IAuth} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {authAction} from "../../redux";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const {register, handleSubmit, formState:{isValid}} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const login: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authAction.login(user));
        if (requestStatus === 'fulfilled') {
            navigate('/cars')
        }
    }
    
    return (
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder={'username'} {...register('username', {required: true})}/>
            <input type="text" placeholder={'password'} {...register('password', {required: true})}/>
            <button disabled={!isValid}>Login</button>
        </form>
    );
};

export {LoginForm};