import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.validator";

const UserForm = ({users, setUsers, commentForUpdate}) => {
    let {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    })
    const save = async (user) => {
        const {data} = await userService.create(user);
        setUsers([...users, data])
        reset();
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <button disabled={!isValid}>{commentForUpdate ? 'update' : 'create'}</button>
        </form>
    );
};

export default UserForm;