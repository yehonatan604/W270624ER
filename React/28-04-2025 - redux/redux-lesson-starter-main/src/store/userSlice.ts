import { createSlice } from "@reduxjs/toolkit";

// type of user
type Tuser = {
    _id: string;
    name: {
        first: string;
        middle?: string;
        last: string;
    }
}

// This is the initial state of the user slice
const initialState = {
    user: null as Tuser | null,
}

// this is the user slice of the redux store
// its created using the createSlice function from redux toolkit
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: { // Actions to update the state
        login: (state, data) => {
            state.user = data.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

//export type TUserSliceState = typeof initialState; if we want to go type safety
export const userActions = userSlice.actions; // this will give us the actions of the slice
export default userSlice.reducer; // this will give us the whoale slice reducer
