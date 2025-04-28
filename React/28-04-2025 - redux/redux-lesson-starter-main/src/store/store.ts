import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice"; // this is the user slice of the redux store

const store = configureStore({
    reducer: { userSlice }, // this is where we will add our reducers
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // this is to avoid the error of serializable check
    }), // this is where we will add our middleware
})

const RootReducer = combineReducers({ userSlice });
export type TRootState = ReturnType<typeof RootReducer>; // this is the type of the root state of the redux store
export default store; // this is the store of the redux
