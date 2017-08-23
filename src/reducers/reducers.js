
const initialState = {
  contacts: [
    {
      name: 'vasya',
      phone: '111',
    },
    {
      name: 'petya',
      phone: '222',
    },
  ],
  filterValue: '',
}


export function contactReducer(state, action) {
  if (state === undefined) {
    state = initialState;
  }
  if (action.type === 'ADD_USER') {
    const newState = Object.assign({}, state);
    newState.contacts.push(action.user)
    return newState;
  }
  if (action.type === 'FILTER_USER') {
    const newState = Object.assign({}, state);
    if(action.filter.length) {
      newState.filterValue = action.filter;
    } else {
      newState.filterValue = '';
    }
    return newState;
  }
  return state;
}
