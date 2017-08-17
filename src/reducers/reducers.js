import store from '../components/App.js';

export function contactReducer(state, action) {
  if (state === undefined) {
    state = [];
  }
  if (action.type === 'ADD_USER') {
    var newState = state.concat([action.user]);
    return newState;
  }
  return state;
}

export function addContact(nameAdd, phoneAdd){
  return {
    type: 'ADD_USER',
    user: {
      name: nameAdd,
      phone: phoneAdd,
    }
  }
};
