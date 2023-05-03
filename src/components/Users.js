import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersService} from "../services";
import {usersActions} from "../redux/slices";
import UsersPage from "../pages/UsersPage";
import User from "./User";
import {useForm} from "react-hook-form";
import {Form} from "react";

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);
    const [newUsers, setNewUsers] = useState();
    useEffect(() => {
        usersService.getAll().then(value => value.data).then(value => dispatch(usersActions.getUsers(value)))
    });

    const {register, reset, handleSubmit} = useForm();
    const save = (user) => {
        console.log(user);

        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                Add user: <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button>save</button>
            </form>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};