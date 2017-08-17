import React, { Component } from 'react';
import {ContactName, ContactPhone, ListItem} from '../styled/styles.js';

class Contact extends React.Component{
  render(){
    return <ListItem>
        <ContactName>{this.props.name}</ContactName>
        <ContactPhone>{this.props.phone}</ContactPhone>
      </ListItem>
  }
}

export default Contact;
