import { createSlice } from "@reduxjs/toolkit";

export const CounterMovie = createSlice({
    name: 'movie',
    initialState: { value: [] },
    reducers: {
        addMovie: (state, action) => {
            state.value.push(action.payload)
        },
    }
})

export const { addMovie, } = CounterMovie.actions
export default CounterMovie.reducer