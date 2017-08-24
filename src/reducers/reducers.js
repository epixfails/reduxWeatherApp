
export default function contactReducer(state, action) {
  if (action.type === 'ADD_USER') {
    const newState = { ...state };
    newState.contacts.push(action.user);
    return newState;
  }
  if (action.type === 'REMOVE_USER') {
    const newState = { ...state };
    newState.contacts.splice(action.i, 1);
    return newState;
  }
  if (action.type === 'FILTER_USER') {
    const newState = { ...state };
    if (action.filter.length) {
      newState.filterValue = action.filter;
    } else {
      newState.filterValue = '';
    }
    return newState;
  }
  return state;
}
