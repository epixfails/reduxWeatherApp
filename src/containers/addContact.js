import React, {Component} from 'react';
import {addContact} from '../actions/actions.js';
import {InputSubmit, Input, AddContactWrapper} from '../styled/styles.js';
import {connect} from 'react-redux';

class AddContact extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      phone: '',
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleChangeName(event){
    this.setState({
      name: event.target.value,
    })
  }
  handleChangePhone(event){
    this.setState({
      phone: event.target.value,
    })
  }
  handleAdd = (event) => {
    event.preventDefault();
    this.props.localAddContact(this.state.name, this.state.phone);
  }

  render(){
    return(
      <AddContactWrapper>
        <Input ref="name" placeholder="new contact name here...." onChange = {this.handleChangeName}></Input>
        <Input ref="phone" placeholder="phone here..." onChange = {this.handleChangePhone}></Input>
        <InputSubmit onClick={this.handleAdd}>Add</InputSubmit>
      </AddContactWrapper>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
      localAddContact: (name, phone) => {
        dispatch(addContact(name, phone));
      }
  }
}


export default connect(null, mapDispatchToProps)(AddContact);
