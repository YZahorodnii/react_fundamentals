import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    comments: []
}
const slice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getComments: (state, action) => {
            state.comments = action.payload
        },
        createComments: (state, action) => {
            state.comments.push(action.payload)
        }
    }

})

const {reducer: commentsReducer, actions} = slice;
const commentsAction = {
    ...actions
};

export {commentsAction, commentsReducer};

