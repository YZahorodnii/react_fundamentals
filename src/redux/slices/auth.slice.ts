import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {string} from "joi";
import {IAuth, IErrorAuth} from "../../interfaces";
import {AxiosError} from "axios";
import {authService} from "../../services";
import {IError} from "../../interfaces";

interface IState{
    error: IErrorAuth
}

const initialState: IState = {
    error: null
}

const register = createAsyncThunk<void, IAuth>(
    'authSlice/register',
    async (user, {rejectWithValue}) => {
        try {
            await authService.register(user)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addMatcher(isFulfilled(), (state) => {
                state.error = null
            })
            .addMatcher(isRejectedWithValue, (state, action) => {
                state.error = action.payload as IErrorAuth
            })
});

const {reducer: authReducer, actions} = slice;
const authAction = {
    ...actions,
    register
}

export {authAction, authReducer}