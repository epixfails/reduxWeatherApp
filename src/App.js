import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import Contact from './components/Contact.js';
import connect from 'react-redux';
import AddContact from './containers/addContact.js';
import contactReducer from './reducers/reducers.js';

export var store = createStore(contactReducer);

store.dispatch({
  type: 'ADD_USER',
  user: {name: 'someone', phone: '213213'}
});


class App extends React.Component{
  render(){
    return (
    <div className="contact-list">
    <input type="text" placeholder="filter contacts by name"/>
      <ul>{
      store.getState().map(function(el){
        return <Contact
                name = {el.name}
                key = {el.id}
                phone = {el.phone}
                image = {el.photo}
                />
        })
      }
      </ul>
      <AddContact/>
    </div>
    )
  }
}


export default App;
