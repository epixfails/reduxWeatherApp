import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input} from '../styled/styles.js';
import {filterContact} from '../actions/actions.js';


class ContactFilter extends Component {
  constructor(props){
    super(props)
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(event){
    this.props.localFilter(event.target.value);
  }
  render(){
    return <Input placeholder="filter contacts by name" onChange = {this.handleFilter}/>
  }
}

const mapDispatchToProps = dispatch => {
  return {
      localFilter: (filter) => {
        dispatch(filterContact(filter));
      }
  }
}

export default connect(null, mapDispatchToProps)(ContactFilter);
