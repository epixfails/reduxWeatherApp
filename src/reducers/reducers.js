import { SET_CURRENT_CONTACT, SET_WEATHER, GOT_WEATHER, ADD_USER, REMOVE_USER, FILTER_USER } from '../actions/actions';


export default function contactReducer(state, action) {
  if (action.type === ADD_USER) {
    const newState = { ...state };
    newState.contacts.push(action.user);
    return newState;
  }
  if (action.type === REMOVE_USER) {
    const newState = { ...state };
    newState.contacts.splice(action.id, 1);
    return newState;
  }
  if (action.type === FILTER_USER) {
    const newState = { ...state };
    if (action.filter.length) {
      newState.filterValue = action.filter;
    } else {
      newState.filterValue = '';
    }
    return newState;
  }
  if (action.type === SET_CURRENT_CONTACT) {
    const newState = { ...state };
    newState.currentContact = { ...newState.contacts[action.id] };
    newState.cityWeather = action.city;
    return newState;
  }
  if (action.type === SET_WEATHER) {
    const newState = { ...state };
    newState.cityWeather = action.city;
    newState.api.isFetching = 'fetch';
    return newState;
  }
  if (action.type === GOT_WEATHER) {
    const newState = { ...state };
    if (action.forecast === 'not found') {
      newState.api.errorFetch = 'city not found';
      newState.cityForecast = {};
    } else {
      newState.cityForecast = action.forecast;
      newState.api.errorFetch = '';
    }
    newState.api.isFetching = 'fetchDone';
    return newState;
  }
  if (action.type === 'GET_WEATHER_ERROR') {
    const newState = { ...state };
    newState.cityForecast = 'omg';
    return newState;
  }
  return state;
}
