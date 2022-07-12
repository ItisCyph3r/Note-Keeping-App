import { createSlice } from "@reduxjs/toolkit";

const reficomSlice = createSlice({
    name: 'refi',
    initialState: { currentUser: null },
    reducers: {
        setCurrentUser (state, action) {
            state.currentUser = action.payload
            console.log(state.currentUser)
        },
    }
});


export const reficomActions = reficomSlice.actions;

export { reficomSlice };