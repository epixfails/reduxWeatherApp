import React from 'react';
import {ContactName, ContactPhone, ListItem} from '../styled/styles.js';

const Contact = props => {
  return (
    <ListItem>
      <ContactName>{props.name}</ContactName>
      <ContactPhone>{props.phone}</ContactPhone>
    </ListItem>
  )
}

export default Contact;
