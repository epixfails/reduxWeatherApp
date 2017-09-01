import * as Action from '../constants/constants';

export const addContact = (name, phone, city, email) => (
  {
    type: Action.ADD_CONTACT,
    contact: { name, phone, city, email },
  }
);

export const filterContact = filterStr => (
  {
    type: Action.FILTER_CONTACT,
    filter: filterStr,
  }
);
export const removeContact = key => (
  {
    type: Action.REMOVE_CONTACT,
    id: key,
  }
);
export const setCurrentContact = key => (
  {
    type: Action.SET_CURRENT_CONTACT,
    id: key,
  }
);

export const setWeather = cityName => (
  {
    type: Action.SET_WEATHER,
    city: cityName,
  }
);

export const gotWeather = data => (
  {
    type: Action.GOT_WEATHER,
    forecastCity: data,
  }
);

export const newCityName = cityName => (
  {
    type: Action.NEW_CONTACT_CITY,
    city: cityName,
  }
);
