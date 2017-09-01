import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import AddContact from './AddContact';
import ContactFilter from './ContactFilter';
import ListOfContacts from './ListOfContacts';
import RightPanel from './RightPanel';
import CurrentPosition from './CurrentPosition';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    color: #1a1a1a;
    font-family: 'Lato', sans-serif;
  }
`;

const AppWrap = styled.div`
  margin:0 auto;
  max-width: 1200px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const PanelsWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const ContactList = styled.div`
  width: 60%;
  padding: 10px 0;
`;

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
