import React, { Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { filterContact } from '../actions/actions';

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

class ContactFilter extends Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(event) {
    this.props.localFilter(event.target.value);
  }
  render() {
    return <Input placeholder="filter contacts by name" onChange={this.handleFilter} />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    localFilter: (filter) => {
      dispatch(filterContact(filter));
    },
  };
};


export default connect(null, mapDispatchToProps)(ContactFilter);
