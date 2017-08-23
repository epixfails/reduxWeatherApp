import React, { PropTypes } from 'react';
import { ContactName, ContactPhone, ListItem } from '../styled/styles';

const Contact = props => (
  <ListItem>
    <ContactName>{props.name}</ContactName>
    <ContactPhone>{props.phone}</ContactPhone>
  </ListItem>
)

Contact.PropTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};


export default Contact;
