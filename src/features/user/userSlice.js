import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllUsers: [] ,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAllUsers: (state, action) => {
            state.AllUsers = action.payload;
        },
    },
});

export const { setAllUsers } = userSlice.actions;
export default userSlice.reducer;