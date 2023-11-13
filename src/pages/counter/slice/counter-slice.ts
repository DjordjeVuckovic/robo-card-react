import {createSlice} from "@reduxjs/toolkit";

export const COUNTER_NAME = 'counter';

const initialState = {
    count: 0,
};
export const counterSlice = createSlice({
    name: COUNTER_NAME,
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
          state.count = 0
        },
        addToCounter: (state, action) => {
            state.count += action.payload
        }
    }
})
export const {
    increment,
    decrement,
    addToCounter,
    reset} = counterSlice.actions
export default counterSlice.reducer;