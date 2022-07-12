import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { firstName: '', lastName: '', ffs: 0 },
    reducers: {
        setFname (state, action) {
            console.log(state.firstName)
            state.firstName = action.payload
        },
        setLname (state, action) {
            state.lastName = action.payload
        },
        setFFS (state, action) {
            console.log(state.ffs)
            state.ffs++
        }
    }
});


export const userActions = userSlice.actions;

export { userSlice };