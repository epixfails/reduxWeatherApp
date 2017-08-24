import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/actions';
import { InputSubmit, Input, AddContactWrapper, Label, CheckboxImportance } from '../styled/styles';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      important: false,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }
  handleCheckbox(event) {
    if (event.target.checked) {
      this.setState({
        important: true,
      });
    } else {
      this.setState({
        important: false,
      });
    }
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
    this.props.localAddContact(this.state.name, this.state.phone, this.state.important);
  }

  render() {
    return (
      <AddContactWrapper>
        <Input placeholder="new contact name here...." onChange={this.handleChangeName} />
        <Input placeholder="phone here..." onChange={this.handleChangePhone} />
        <Label htmlFor="important">
          <CheckboxImportance
            onChange={this.handleCheckbox}
          />
          Check as favorite
        </Label>
        <InputSubmit onClick={this.handleAdd}>Add</InputSubmit>
      </AddContactWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    localAddContact: (name, phone, importanceState) => {
      dispatch(addContact(name, phone, importanceState));
    },
  };
};

AddContact.PropTypes = {
  localAddContact: PropTypes.func,
};


export default connect(null, mapDispatchToProps)(AddContact);
