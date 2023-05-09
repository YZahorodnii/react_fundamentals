import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {ICar, IError} from "../../interfaces";
import {carsService} from "../../services";
import {AxiosError} from "axios";

interface IState{
    cars: ICar[],
    errors: IError,
    trigger: boolean,
    carForUpdate: ICar
}

const initialState: IState = {
    cars: [],
    errors: null,
    trigger: false,
    carForUpdate: null
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const createCar = createAsyncThunk<void, {car: ICar}>(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            await carsService.create(car)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    })

const updateCar = createAsyncThunk<void, {car:ICar, id:number}>(
    'carSlice/updateCar',
    async ({car, id}, {rejectWithValue}) => {
        try {
            await carsService.updateById(id, car)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const deleteCar = createAsyncThunk<void, {id: number}>(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            await carsService.deleteById(id)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(updateCar.fulfilled, state => {
                state.carForUpdate = null
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })
            .addMatcher(isFulfilled(createCar, updateCar, deleteCar), state => {
                state.trigger = !state.trigger
            })

});

const {reducer: carReducer, actions} = slice;
const carActions = {
    ...actions,
    getAll,
    createCar,
    updateCar,
    deleteCar
}

export {carActions, carReducer}