import { put, takeEvery, call } from "redux-saga/effects";
import { fetchError, fetchRequest, fetchSucces } from "./Slice";
import axios from "axios";

function* userFetchSaga() {
    try {
        const response = yield call(axios.get, 'http://localhost:3000/users');
        yield put(fetchSucces(response.data));
    } catch (error) {
        yield put(fetchError(error.message));
    }
}

function* userSaga() {
    yield takeEvery(fetchRequest.type, userFetchSaga);
}

export default userSaga;