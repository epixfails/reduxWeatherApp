import React, { PropTypes } from 'react';
import ThemeProvider from 'styled-components';
import { ContactName, ContactPhone, ListItem, ButtonRemove, Icon, theme } from '../styled/styles';
import trash from '../img/trash.svg';

const Contact = props => (
  <ListItem>
    <ContactName>{props.name}</ContactName>
    <ContactPhone>{props.phone}</ContactPhone>
    <ButtonRemove onClick={props.onClick}><Icon src={trash} alt="remove" /></ButtonRemove>
  </ListItem>
);

Contact.PropTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Contact;
