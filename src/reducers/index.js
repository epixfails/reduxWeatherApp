import { combineReducers } from 'redux';
import contactsList from './contactsList';
import weather from './weather';
import filterContacts from './filterContacts';
import apiState from './api';

export default combineReducers({
  contactsList,
  weather,
  filterContacts,
  apiState,
});
