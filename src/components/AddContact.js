import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addContact, setWeather } from '../actions/actions';


const AddContactWrapper = styled.div`
  margin-top: 20px;
`;
const LinkAddMore = styled.span`
  display: inline-block;
  cursor: pointer;
  color: #FF8C32;
  margin: 10px 0 14px;
`;
const AddInfo = styled.div`
  margin-bottom: 10px;
`;
const ErrorMsg = styled.span`
  color: #FF8C32;
  font-size: 14px;
`;
const InputSubmit = styled.button`
  width:100%;
  background-color:#fff;
  border: 1px #FF8C32 solid;
  padding: 8px;
  font-size: 18px;
  &:hover {
    background: #FF8C32;
    color: #fff;
  }
`;
const Input = styled.input`
  width:100%;
  overflow: hidden;
  line-height:24px;
  font-size: 16px;
  margin: 5px 0;
  padding-left:10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;


class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInput: false,
      errorAdd: this.props.errorAdd,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.renderCityAdd = this.renderCityAdd.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
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
    this.setState({
      localError: '',
    });
    if (this.state.name.match(/^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$/g)) {
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
      this.setState({
        name: '',
        phone: '',
        email: '',
        city: '',
      });
    } else {
      this.setState({
        localError: 'Seems like a wrong name',
      });
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
        {(this.props.errorAdd) && (
          <ErrorMsg>This friend is already in list</ErrorMsg>
        )}
        {(this.state.localError) && (
          <ErrorMsg>{this.state.localError}</ErrorMsg>
        )}
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
      dispatch(setWeather((!city) ? city = '' : city));
    },
  };
};

const mapStateToProps = (state) => {
  const ifError = state.contacts.addContactError;
  return {
    errorAdd: ifError,
  };
};

AddContact.propTypes = {
  localAddContact: PropTypes.func.isRequired,
  errorAdd: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
