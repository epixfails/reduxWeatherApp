import * as Action from '../constants/constants';


function filterContacts(state = '', action) {
  let newState = state;
  switch (action.type) {
    case Action.FILTER_CONTACT: {
      if (action.filter.length) {
        newState = action.filter;
      } else {
        newState = '';
      }
      return newState;
    }
    default: {
      return newState;
    }
  }
}

export default filterContacts;
