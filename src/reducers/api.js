import * as Action from '../constants/constants';

export default function apiState(state = {}, action) {
  const newState = { ...state };
  switch (action.type) {
    case Action.SET_WEATHER: {
      if (action.city === '') {
        newState.errorFetch = 'city not found';
      }
      newState.isFetching = 'fetch';
      return newState;
    }
    case Action.GOT_WEATHER: {
      if (action.forecast === 'not found') {
        newState.errorFetch = 'city not found';
      } else {
        newState.errorFetch = '';
      }
      newState.isFetching = 'fetchDone';
      return newState;
    }
    default: {
      return newState;
    }
  }
}
