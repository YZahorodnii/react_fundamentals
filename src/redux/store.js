import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices";

const rootReducer = combineReducers({
    users: usersReducer
});
const setupStore = () => configureStore({
    reducer: rootReducer
});

export{setupStore};