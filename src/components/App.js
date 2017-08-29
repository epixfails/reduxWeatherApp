import React from 'react';
import AddContact from '../containers/addContact';
import { ContactList, AppWrap } from './styles';
import ContactFilter from './ContactFilter';
import ListOfContacts from './ListOfContacts';
import RightPanel from './RightPanel';


const App = () => (
  <AppWrap>
    <ContactList>
      <ContactFilter />
      <ListOfContacts />
      <AddContact />
    </ContactList>
    <RightPanel />
  </AppWrap>
);

export default App;
