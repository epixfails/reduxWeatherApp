import React, { Component } from 'react';
import '../App.css';

class Contact extends React.Component{
  render(){
    return <li>
        <div className = "name">{this.props.name}</div>
        <div className = "phone">{this.props.phone}</div>
      </li>
  }
}

export default Contact;
