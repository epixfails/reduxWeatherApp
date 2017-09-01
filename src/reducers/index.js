import { combineReducers } from 'redux';
import contacts from './contacts';
import weather from './weather';
import filterContacts from './filterContacts';
import apiState from './api';

export default combineReducers({
  contacts,
  weather,
  filterContacts,
  apiState,
});
