import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {ICar, IError, IPagination} from "../../interfaces";
import {carsService} from "../../services";
import {AxiosError} from "axios";

interface IState{
    prev: string,
    next: string,
    cars: ICar[],
    errors: IError,
    trigger: boolean,
    carForUpdate: ICar
}

const initialState: IState = {
    prev: null,
    next: null,
    cars: [],
    errors: null,
    trigger: false,
    carForUpdate: null
};

const getAll = createAsyncThunk<IPagination<ICar[]>, void>(
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
                const {prev, next, items} = action.payload
                state.cars = items
                state.next= next
                state.prev= prev
            })
            .addCase(updateCar.fulfilled, state => {
                state.carForUpdate = null
            })
            .addMatcher(isFulfilled(), state => {
                state.errors = null
            })
            .addMatcher(isFulfilled(createCar, updateCar, deleteCar), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
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