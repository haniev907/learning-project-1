import { createSlice } from "@reduxjs/toolkit";
import api from '../../api'


const initialState = {
    AllUsers: api.users.fetchAll() ,
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