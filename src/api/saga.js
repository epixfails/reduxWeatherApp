import { call, put, takeLatest } from 'redux-saga/effects';
import { requestApi } from './apirequest';
import { SET_WEATHER, GOT_WEATHER, GOT_WEATHER_ERROR } from '../constants/constants';

function* fetchUser(action) {
  try {
    let cityToRequest = action.city;
    cityToRequest = cityToRequest || '';
    const forecastGot = yield call(requestApi, cityToRequest);
    yield put({ type: GOT_WEATHER, forecast: forecastGot });
  } catch (e) {
    yield put({ type: GOT_WEATHER_ERROR, message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(SET_WEATHER, fetchUser);
}

export default mySaga;
