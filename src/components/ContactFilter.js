import React, {Component} from 'react';
import {Input} from '../styled/styles.js';


class ContactFilter extends Component {
  render(){
    return <Input placeholder="filter contacts by name" onChange={this.props.onChange}/>
  }
}

export default ContactFilter;
