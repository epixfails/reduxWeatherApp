import React, { Component } from 'react';
import store from '../App.js';
import contactReducer from '../reducers/reducers.js';
import addUser from '../reducers/reducers.js';
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
  }
  handleAdd(event){
    store.dispatch(addUser(nameInput, phone))
    console.log(store);
  }
  render(){
    return(
      <div>
        <input className="input-name" onChange = {this.handleChange}></input>
        <input className="input-phone"></input>
        <button className="submit-contact" onClick = {this.handleAdd}>Add</button>
      </div>
    )
  }
}


export default AddContact;
