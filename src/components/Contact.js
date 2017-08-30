import React from 'react';
import PropTypes from 'prop-types';
import { ContactName, ContactPhone, ListItem, ButtonRemove, Icon, ContactControls } from './styles';
import trash from '../img/trash.svg';

const Contact = props => (
  <ListItem active={props.active}>
    <ContactName  onClick={props.onClickSetCurrentContact}>
      {props.name}
    </ContactName>
    <ContactPhone onClick={props.onClickSetCurrentContact}>
      {props.phone}
    </ContactPhone>
    <ContactControls>
      <ButtonRemove onClick={props.onClickRemove}><Icon src={trash} alt="remove" /></ButtonRemove>
    </ContactControls>
  </ListItem>
);

Contact.PropTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  onClickSetCurrentContact: PropTypes.func.isRequired,
};


export default Contact;
