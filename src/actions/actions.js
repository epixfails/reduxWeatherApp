export const ADD_USER = 'ADD_USER';
export const FILTER_USER = 'FILTER_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SET_CURRENT_CONTACT = 'SET_CURRENT_CONTACT';
export const SET_WEATHER = 'SET_WEATHER';
export const GOT_WEATHER = 'GOT_WEATHER';
export const GOT_WEATHER_ERROR = 'GOT_WEATHER_ERROR';
export const NEW_CONTACT_CITY = 'NEW_CONTACT_CITY';

export function addContact(newName, num, cityName, mail) {
  return {
    type: ADD_USER,
    user: { name: newName, phone: num, city: cityName, email: mail },
  };
}

export function filterContact(filterStr) {
  return {
    type: FILTER_USER,
    filter: filterStr,
  };
}

export function removeContact(key) {
  return {
    type: REMOVE_USER,
    id: key,
  };
}
export function setCurrentContact(key) {
  return {
    type: SET_CURRENT_CONTACT,
    id: key,
  };
}
export function setWeather(cityName) {
  return {
    type: SET_WEATHER,
    city: cityName,
  };
}

export function gotWeather(data) {
  return {
    type: GOT_WEATHER,
    forecastCity: data,
  };
}

export function newCityName(cityName) {
  return {
    type: NEW_CONTACT_CITY,
    city: cityName,
  };
}
