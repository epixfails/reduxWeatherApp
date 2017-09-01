import { call, put, takeEvery } from 'redux-saga/effects';
import { requestApi } from './apirequest';
import { SET_WEATHER, GOT_WEATHER, GOT_WEATHER_ERROR } from '../constants/constants';

function* fetchUser(action) {
  try {
    const forecastGot = yield call(requestApi, action.city);
    yield put({ type: GOT_WEATHER, forecast: forecastGot });
  } catch (e) {
    yield put({ type: GOT_WEATHER_ERROR, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(SET_WEATHER, fetchUser);
}

export default mySaga;
