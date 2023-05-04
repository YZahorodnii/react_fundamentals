import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}

const slice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setAll: (state, action) => {
            state.cars = action.payload
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        changeTrigger: (state, actions) => {
            state.trigger = !state.trigger
        }

    }
});

const {reducer: carsReducer, actions} = slice;

const carsAction = {
    ...actions
}

export {
    carsReducer, carsAction
}