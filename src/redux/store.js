import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userAuth/user';
import { counterSlice} from './counter/counter';
import { reficomSlice } from './RefiComm/reficomm';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer,
        reficom: reficomSlice.reducer
    }
});

export default store;
