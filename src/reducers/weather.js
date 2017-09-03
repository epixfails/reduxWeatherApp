import * as Action from '../constants/constants';

export default function weather(state = { cityWeather: '' }, action) {
  const newState = { ...state };
  switch (action.type) {
    case Action.SET_CURRENT_CONTACT: {
      newState.cityWeather = action.city;
      return newState;
    }
    case Action.GOT_WEATHER: {
      if (action.forecast === 'not found') {
        newState.cityForecast = {};
      } else {
        newState.cityForecast = action.forecast;
      }
      return newState;
    }
    case Action.GOT_WEATHER_ERROR: {
      newState.cityForecast = 'omg';
      return newState;
    }
    default: {
      return newState;
    }
  }
}
