import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

const Store = configureStore({
    reducer: {
        userInfo: userSlice.reducer

    }
});

export default Store;
