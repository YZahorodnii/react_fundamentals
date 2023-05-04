import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carsReducer, commentsReducer, usersReducer} from "./slices";

const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    cars: carsReducer
});
const setupStore = () => configureStore({
    reducer: rootReducer
});

export{setupStore};

