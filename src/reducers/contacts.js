import * as Action from '../constants/constants';


const initialState = {
  addContactError: false,
  contacts: [
    {
      name: 'Vasya',
      city: '234523',
      phone: '123-123-123',
    },
    {
      name: 'Petya',
      city: 'London',
      phone: '123-123-123',
    },
  ],
  currentContact: {},
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case Action.ADD_CONTACT: {
      const newState = { ...state };
      newState.addContactError = false;
      newState.contacts = [...state.contacts];
      newState.contacts.forEach((contact) => {
        if (contact.name === action.contact.name) {
          newState.addContactError = true;
        }
      });
      if (!newState.addContactError) {
        newState.contacts.forEach((contact) => {
          contact.active = false;
        });
        action.contact.active = true;
        newState.contacts.push(action.contact);
        return newState;
      }
      return newState;
    }
    case Action.REMOVE_CONTACT: {
      const newState = { ...state };
      if (newState.contacts[action.id].name === newState.currentContact.name) {
        newState.currentContact = {};
      }
      newState.contacts.splice(action.id, 1);
      return newState;
    }
    case Action.NEW_CONTACT_CITY: {
      const newState = { ...state };
      newState.contacts.forEach((contact) => {
        if (contact.name === newState.currentContact.name) {
          contact.city = action.city;
        }
      });
      return newState;
    }
    case Action.SET_CURRENT_CONTACT: {
      const newState = { ...state };
      newState.currentContact = { ...newState.contacts[action.id] };
      newState.contacts.forEach((contact) => {
        contact.active = false;
      });
      newState.contacts[action.id].active = true;
      return newState;
    }
    default: {
      const newState = { ...state };
      return newState;
    }
  }
}
