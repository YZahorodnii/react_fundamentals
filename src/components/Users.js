import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersService} from "../services";
import {usersActions} from "../redux/slices";
import User from "./User";
import {useForm} from "react-hook-form";

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);
    useEffect(() => {
        usersService.getAll().then(value => value.data).then(value => dispatch(usersActions.getUsers(value)))
    }, [dispatch]);

    const {register, reset, handleSubmit} = useForm();
    const save = async (user) => {
        const {data} = await usersService.create(user);
        dispatch(usersActions.createUsers(data))
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