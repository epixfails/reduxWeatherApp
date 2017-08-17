import React, { Component } from 'react';
import connect from 'react-redux';
import { createStore } from 'redux';
import Contact from './Contact.js';
import AddContact from '../containers/addContact.js';
import { contactReducer, addContact } from '../reducers/reducers.js';
import { ContactList, List } from '../styled/styles.js';
import ContactFilter from './ContactFilter.js';

export var store = createStore(contactReducer);

export function addNewContact(newname, num){
  return {
    type: 'ADD_USER',
    user: {name: newname, phone: num}
  }
}

store.dispatch(addContact('vasya', '324324'))
store.dispatch(addContact('petya', '324324'))
store.dispatch(addContact('masha', '324324'))
store.dispatch(addContact('dasha', '324324'))




class App extends Component {
  render(){
    return (
    <ContactList>
      <ContactFilter/>
      <List>
      {
      store.getState().map(function(el){
        return <Contact
                name = {el.name}
                key = {el.id}
                phone = {el.phone}
                image = {el.photo}
                />
        })
      }
      </List>
      <AddContact/>
    </ContactList>
    )
  }
}

export default App;
