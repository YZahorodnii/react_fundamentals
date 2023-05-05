import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slices/car.slice";

const rootReducer = combineReducers({
    cars: carsReducer
})

const setupStore = configureStore({
    reducer: rootReducer
});

export {setupStore}

