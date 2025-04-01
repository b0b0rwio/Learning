import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: true,
    error: null
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchSucces: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
        fetchError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { fetchRequest, fetchSucces, fetchError } = UserSlice.actions;
export default UserSlice.reducer;