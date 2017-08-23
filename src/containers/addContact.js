import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/actions';
import { InputSubmit, Input, AddContactWrapper } from '../styled/styles';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleChangePhone(event) {
    this.setState({
      phone: event.target.value,
    });
  }
  handleAdd() {
    this.props.localAddContact(this.state.name, this.state.phone);
  }

  render() {
    return (
      <AddContactWrapper>
        <Input placeholder="new contact name here...." onChange={this.handleChangeName} />
        <Input placeholder="phone here..." onChange={this.handleChangePhone} />
        <InputSubmit onClick={this.handleAdd}>Add</InputSubmit>
      </AddContactWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    localAddContact: (name, phone) => {
      dispatch(addContact(name, phone));
    },
  };
};

AddContact.PropTypes = {
  localAddContact: PropTypes.func,
};


export default connect(null, mapDispatchToProps)(AddContact);
