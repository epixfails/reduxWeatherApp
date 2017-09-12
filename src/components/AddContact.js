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
  box-sizing: border-box;
`;

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdditionFieldVisible: false,
      errorAdd: this.props.errorAdd,
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.setVisibilityCityAddition = this.setVisibilityCityAddition.bind(this);
  }
  setVisibilityCityAddition() {
    this.setState({
      isAdditionFieldVisible: !this.state.isAdditionFieldVisible,
    });
  }
  handleChange() {
    if (this.state.isAdditionFieldVisible) {
      this.setState({
        name: this.contactName.value,
        phone: this.contactPhone.value,
        email: this.contactEmail.value,
        city: this.contactCity.value,
      });
    } else {
      this.setState({
        name: this.contactName.value,
        phone: this.contactPhone.value,
      });
    }
  }
  handleAdd(event) {
    event.preventDefault();
    let errorMessage;
    let { name, phone, city, email } = this.state;
    if (name.match(/^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$/g)) {
      this.props.localAddContact(name, phone, city, email);
      this.contactName.value = '';
      this.contactPhone.value = '';
      if (this.contactCity) {
        this.contactCity.value = '';
        this.contactEmail.value = '';
      }
      ({ name, phone, city, email } = { name: '', phone: '', city: '', email: '' });
      errorMessage = '';
    } else {
      errorMessage = 'Looks like a wrong name';
    }
    this.setState({ name, phone, email, city, errorMessage });
  }
  render() {
    return (
      <AddContactWrapper>
        <form onSubmit={this.handleAdd}>
          {this.props.errorAdd &&
            <ErrorMsg>This friend is already in list</ErrorMsg>
          }
          {this.state.errorMessage &&
            <ErrorMsg>{this.state.errorMessage}</ErrorMsg>
          }
          <Input
            innerRef={input => this.contactName = input}
            placeholder="new contact name here...."
            onChange={this.handleChange}
          />
          <Input
            innerRef={input => this.contactPhone = input}
            placeholder="phone here..."
            onChange={this.handleChange}
          />
          <LinkAddMore
            onClick={this.setVisibilityCityAddition}
          >+ More Info </LinkAddMore>
          {this.state.isAdditionFieldVisible &&
            <AddInfo>
              <Input
                innerRef={input => this.contactCity = input}
                placeholder="Add friend's city and view weather there.."
                onChange={this.handleChange}
              />
              <Input
                innerRef={input => this.contactEmail = input}
                placeholder="E-mail.."
                onChange={this.handleChange}
              />
            </AddInfo>
          }
          <InputSubmit onClick={this.handleAdd}>Add</InputSubmit>
        </form>
      </AddContactWrapper>
    );
  }
}

const mapStateToProps = state => (
  {
    errorAdd: state.contactsList.addContactError,
  }
);
const mapDispatchToProps = dispatch => (
  {
    localAddContact: (name, phone, city, email) => {
      dispatch(addContact(name, phone, city, email));
      dispatch(setWeather(city));
    },
  }
);
AddContact.propTypes = {
  localAddContact: PropTypes.func.isRequired,
  errorAdd: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
