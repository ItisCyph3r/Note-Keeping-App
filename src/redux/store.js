// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const initialState = { value: 0};

// const counterSlice = createSlice({
//     name: "counter",
//     initialState: {value: 0},
//     reducers: {
//         increase (state, action){
//             state.value++ 
//         },
//         decrease (state, action){
//             state.value--
//         },
//         multiply (state, action){
//             state.value += action.payload
//         }
//     }
// });

// // export const {increase, decrease, multiply } = counterSlice.actions;

// export const actions = counterSlice.actions

// const store = configureStore({
//     reducer: counterSlice.reducer,
// });

// export default store;




import { configureStore, createSlice } from '@reduxjs/toolkit'

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

export const counterActions = counterSlice.actions;

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
})

export const userActions = userSlice.actions;


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer
    }
});

export default store;

// const store = configureStore({
//     reducer: counterSlice.reducer,
// });

// export default store;