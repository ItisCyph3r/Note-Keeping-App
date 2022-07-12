import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increase (state) {
        state.value++
        },
        decrease (state) {
        state.value--
        },
        multiply (state, action) {
        state.value *= action.payload
        },
    },
})

export { counterSlice };

export const counterActions = counterSlice.actions;