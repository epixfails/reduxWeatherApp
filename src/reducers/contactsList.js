import * as Action from '../constants/constants';

export default function contactsList(state = { contacts: [] }, action) {
  const newState = { ...state };
  switch (action.type) {
    case Action.ADD_CONTACT: {
      newState.addContactError = false;
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
      if (newState.contacts[action.id].name === newState.currentContact.name) {
        newState.currentContact = {};
      }
      newState.contacts.splice(action.id, 1);
      return newState;
    }
    case Action.NEW_CONTACT_CITY: {
      newState.contacts.forEach((contact) => {
        if (contact.name === newState.currentContact.name) {
          contact.city = action.city;
        }
      });
      return newState;
    }
    case Action.SET_CURRENT_CONTACT: {
      newState.currentContact = { ...newState.contacts[action.id] };
      newState.contacts.forEach((contact) => {
        contact.active = false;
      });
      newState.contacts[action.id].active = true;
      return newState;
    }
    default: {
      return newState;
    }
  }
}
