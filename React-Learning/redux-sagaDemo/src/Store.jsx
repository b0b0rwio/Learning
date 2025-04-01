import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import UserSlice from './Slice'
import userSaga from "./saga";
 
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        userInfo: UserSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(userSaga);
export default store;