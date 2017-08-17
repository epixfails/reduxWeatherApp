import React, {Component} from 'react';
import store from '../components/App.js';
import {contactReducer, addContact} from '../reducers/reducers.js';
import {InputSubmit, Input, AddContactWrapper} from '../styled/styles.js';

let nameInput = null;
let phone = 12345;

class AddContact extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleChange(event){
    nameInput = event.target.value;
    console.log(nameInput);
  }
  handleAdd(event){
    contactReducer([], addContact(nameInput, phone))
    console.log(store);
  }
  render(){
    return(
      <AddContactWrapper>
        <Input placeholder="new contact name here...." onChange = {this.handleChange}></Input>
        <Input placeholder="phone here..."></Input>
        <InputSubmit onClick={this.handleAdd}>Add</InputSubmit>
      </AddContactWrapper>
    )
  }
}


export default AddContact;
