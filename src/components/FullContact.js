import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FullContactWrap, FullContactTitle, FullContactItem, FullContactActual, Image, FullContactImgWrap } from './fullContactStyle';
import persons from '../img/persons.svg';

const FullContact = props => (
  <FullContactWrap>
    {!props.name && (
    <FullContactActual>
      <FullContactTitle>Select a contact</FullContactTitle>
      <FullContactImgWrap>
        <Image src={persons} />
      </FullContactImgWrap>
    </FullContactActual>
    )}
    {props.name && (
    <FullContactActual>
      <FullContactTitle>{props.name}</FullContactTitle>
      <FullContactItem>{props.phone}</FullContactItem>
      <FullContactItem>From {props.city}</FullContactItem>
      <FullContactItem>E-mail to: {props.email}</FullContactItem>
    </FullContactActual>
    )}
  </FullContactWrap>
);


const mapStateToProps = (state) => {
  const contactToDisplay = state.currentContact;
  return contactToDisplay;
};

FullContact.PropTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string,
};

export default connect(mapStateToProps)(FullContact);
