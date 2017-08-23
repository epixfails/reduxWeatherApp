import React from 'react';
import AddContact from '../containers/addContact';
import { ContactList } from '../styled/styles';
import ContactFilter from './ContactFilter';
import ListOfContacts from './ListOfContacts';


const App = () => (
  <ContactList>
    <ContactFilter />
    <ListOfContacts />
    <AddContact />
  </ContactList>
);

export default App;
