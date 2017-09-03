import React from 'react';
import PropTypes from 'prop-types';
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
  box-sizing: border-box;
`;

const ContactFilter = props => (
  <Input
    placeholder="filter contacts by name"
    onChange={event => props.localFilter(event.target.value)}
  />
);

const mapDispatchToProps = dispatch => (
  {
    localFilter: (filter) => { dispatch(filterContact(filter)); },
  }
);
ContactFilter.propTypes = {
  localFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ContactFilter);
