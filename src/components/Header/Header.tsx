import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authAction} from "../../redux";
const Header = () => {
    const dispatch = useAppDispatch();
    const {me} = useAppSelector(state => state.authReducer);

    useEffect(() => {
        if (!me && authService.getAccessToken()) {
            dispatch(authAction.me())
        }
    }, [me, dispatch])
    return (
        <div className={css.Header}>
            <div>Logo</div>
            {
                me ?
                    <div>
                        <span>{me.username}</span>
                        <button>Logout</button>
                    </div>
                    :
                    <div>
                        <NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>
            }
        </div>
    );
};

export {Header};