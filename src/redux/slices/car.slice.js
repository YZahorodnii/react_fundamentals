import {createAsyncThunk, isPending, isFulfilled, isRejectedWithValue, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carsService.getAll()
            await new Promise(resolve => setTimeout(resolve, 2000)) // для відображення Loading 2сек
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carsSlice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carsService.deleteById(id)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carsService.create(car)
        } catch (e) {
            return thunkAPI.rejectWithValue((e.response.data))
        }
    }
)

const update = createAsyncThunk(
    'carSlice/update',
    async ({id, car}, thunkAPI) => {
        try {
            await carsService.updateById(id, car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const slice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    // extraReducers: {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.cars = action.payload
    //     },
    //     [create.fulfilled]: (state, action) => {
    //         state.trigger = !state.trigger
    //     }
    // }
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            .addCase(update.fulfilled, (state, action) => {
                state.carForUpdate = null
            })
            .addMatcher(isPending(), (state) => {
                state.loading = true
                state.error = null
            })
            .addMatcher(isFulfilled(), (state) => {
                state.loading = false
                state.error = null
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addMatcher(isFulfilled(update, create, deleteCar), (state) => {
                state.trigger = !state.trigger
            })
});

const {reducer: carsReducer, actions} = slice;

const carsAction = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
}

export {
    carsAction, carsReducer
}