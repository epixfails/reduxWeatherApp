import React from 'react';
import AddContact from './addContact';
import { ContactList, AppWrap, PanelsWrap } from './styles';
import ContactFilter from './ContactFilter';
import ListOfContacts from './ListOfContacts';
import RightPanel from './RightPanel';
import CurrentPosition from './CurrentPosition';


const App = () => (
  <AppWrap>
    <CurrentPosition />
    <PanelsWrap>
      <ContactList>
        <ContactFilter />
        <ListOfContacts />
        <AddContact />
      </ContactList>
      <RightPanel />
    </PanelsWrap>
  </AppWrap>
);

export default App;
