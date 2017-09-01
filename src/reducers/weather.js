import * as Action from '../constants/constants';

export default function weather(state = { cityWeather: '' }, action) {
  switch (action.type) {
    case Action.SET_CURRENT_CONTACT: {
      const newState = { ...state };
      newState.cityWeather = action.city;
      return newState;
    }
    case Action.GOT_WEATHER: {
      const newState = { ...state };
      if (action.forecast === 'not found') {
        newState.cityForecast = {};
      } else {
        newState.cityForecast = action.forecast;
      }
      return newState;
    }
    case Action.GOT_WEATHER_ERROR: {
      const newState = { ...state };
      newState.cityForecast = 'omg';
      return newState;
    }
    default: {
      const newState = { ...state };
      return newState;
    }
  }
}
