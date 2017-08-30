import { SET_CURRENT_CONTACT, SET_WEATHER, GOT_WEATHER, ADD_USER, REMOVE_USER, FILTER_USER, GOT_WEATHER_ERROR, NEW_CONTACT_CITY } from '../actions/actions';


export default function contactReducer(state, action) {
  if (action.type === ADD_USER) {
    const newState = { ...state };
    newState.addContactError = false;
    newState.contacts.forEach((contact) => {
      if (contact.name === action.user.name) {
        newState.addContactError = true;
      }
    });
    if (!newState.addContactError) {
      newState.contacts.push(action.user);
      return newState;
    }
    return newState;
  }
  if (action.type === REMOVE_USER) {
    const newState = { ...state };
    if (newState.contacts[action.id].name === newState.currentContact.name) {
      newState.currentContact = {};
      newState.api.isFetching = 'initial';
    }
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
    newState.contacts.forEach((contact) => {
      contact.active = false;
    });
    newState.contacts[action.id].active = true;
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
  if (action.type === GOT_WEATHER_ERROR) {
    const newState = { ...state };
    newState.cityForecast = 'omg';
    return newState;
  }
  if (action.type === NEW_CONTACT_CITY) {
    const newState = { ...state };
    newState.contacts.forEach((contact) => {
      if (contact.name === newState.currentContact.name) {
        contact.city = action.city;
      }
    });
    return newState;
  }
  return state;
}
