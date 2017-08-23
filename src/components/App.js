import React  from 'react';
import AddContact from '../containers/addContact.js';
import { ContactList } from '../styled/styles.js';
import ContactFilter from './ContactFilter.js';
import ListOfContacts from './ListOfContacts.js';


const App = () => {
  return (
    <ContactList>
      <ContactFilter/>
      <ListOfContacts/>
      <AddContact/>
    </ContactList>
    )
  }



export default App;
