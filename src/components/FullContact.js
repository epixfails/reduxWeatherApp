import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import persons from '../img/persons.svg';

export const ImgWrap = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 0;
`;
export const Image = styled.img`
  width: 150px;
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;
export const Item = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const FullContact = ({ name, phone, city, email }) => (
  <div>
    {!name &&
      <div>
        <Title>Select a contact</Title>
        <ImgWrap>
          <Image src={persons} />
        </ImgWrap>
      </div>
    }
    {name &&
      <div>
        <Title>{name}</Title>
        <Item>{phone}</Item>
        <Item>From {city}</Item>
        <Item>E-mail to: {email}</Item>
      </div>
    }
  </div>
);

const mapStateToProps = state => (state.contactsList.currentContact);
FullContact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string,
};
FullContact.defaultProps = {
  name: '',
};
export default connect(mapStateToProps)(FullContact);
