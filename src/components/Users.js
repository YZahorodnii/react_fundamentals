import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersService} from "../services";
import {usersActions} from "../redux/slices";
import UsersPage from "../pages/UsersPage";
import User from "./User";
import {Form} from "react-router-dom";
import {useForm} from "react-hook-form";

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);
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
            <Form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button>save</button>
            </Form>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};