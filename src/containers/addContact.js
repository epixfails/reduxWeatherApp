import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../actions/actions';
import { InputSubmit, Input, AddContactWrapper, LinkAddMore, AddInfo } from '../components/styles';

function validateInput() {
  return true;
}

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      cityInput: false,
      city: '',
      email: '',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.renderCityAdd = this.renderCityAdd.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }
  handleChangeName(event) {
    if (validateInput()) {
      this.setState({
        name: event.target.value,
      });
    } else {
      this.setState({
        name: event.target.value,
      });
    }
  }
  handleChangePhone(event) {
    this.setState({
      phone: event.target.value,
    });
  }
  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  handleChangeCity(event) {
    this.setState({
      city: event.target.value,
    });
  }
  handleAdd() {
    this.props.localAddContact(
      this.state.name,
      this.state.phone,
      this.state.city,
      this.state.email
    );
    this.contactName.value = '';
    this.contactPhone.value = '';
    if (this.contactCity) {
      this.contactCity.value = '';
      this.contactEmail.value = '';
    }
  }
  renderCityAdd() {
    this.setState({
      cityInput: this.state.cityInput ? false : true,
    });
  }

  render() {
    return (
      <AddContactWrapper>
        <Input
          innerRef={input => this.contactName = input}
          placeholder="new contact name here...."
          onChange={this.handleChangeName}
        />
        <Input
          innerRef={input => this.contactPhone = input}
          placeholder="phone here..."
          onChange={this.handleChangePhone}
        />
        <LinkAddMore
          onClick={this.renderCityAdd}
        >+ More Info </LinkAddMore>
        {this.state.cityInput && (
          <AddInfo>
            <Input
              innerRef={input => this.contactCity = input}
              placeholder="Add city of a friend and view weather there.."
              onChange={this.handleChangeCity}
            />
            <Input
              innerRef={input => this.contactEmail = input}
              placeholder="E-mail.."
              onChange={this.handleChangeEmail}
            />
          </AddInfo>
        )}
        <InputSubmit onClick={this.handleAdd}>Add</InputSubmit>
      </AddContactWrapper>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    localAddContact: (name, phone, city, email) => {
      dispatch(addContact(name, phone, city, email));
    },
  };
};

AddContact.PropTypes = {
  localAddContact: PropTypes.func.isRequired,
};


export default connect(null, mapDispatchToProps)(AddContact);
