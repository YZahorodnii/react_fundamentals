import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}

const slice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setAll: (state, action) => {
            state.cars = action.payload
        },
        setUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        changeTrigger: (state, action) => {
            state.trigger = !state.trigger
        }
    }
});

const {reducer:carsReducer, actions} = slice;

const carsAction = {
    ...actions
}

export {
    carsAction, carsReducer
}