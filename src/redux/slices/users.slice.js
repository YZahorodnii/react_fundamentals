import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload
        }
    }

})

const {reducer:usersReducer, actions} = slice; // тут я перейменував reducer на usersReducer, бо будуть і другі reducer
const usersActions = {
    ...actions
};

export {usersReducer, usersActions};