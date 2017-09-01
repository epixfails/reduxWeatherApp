import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Contact from './Contact';
import { removeContact, setWeather, setCurrentContact } from '../actions/actions';
import cry from '../img/cry.svg';

const List = styled.ul`
  padding:0px;
  margin:0 auto;
  width:100%;
  height: 220px;
  overflow-y: scroll;
`;
const ListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  text-align: center;
  font-size: 24px;
  color: #FF8C32;
`;
const ImgListEmpty = styled.img`
  display: block;
  height: 100px;
`;

const ListOfContacts = props => (
  <List>
    {props.contactsArray.length === 0 && (
      <ListEmpty><ImgListEmpty src={cry} />You have no contacts</ListEmpty>
    )}
    {props.contactsArray.map(function (el, index) {
      return (
        <Contact
          onClickRemove={() => props.localRemoveContact(index)}
          onClickSetCurrentContact={() => props.localSetCurrentContact(index, el.city)}
          name={el.name}
          key={index}
          phone={el.phone}
          city={el.city}
          active={el.active}
        />
      );
    })}
  </List>
);

const mapDispatchToProps = (dispatch) => {
  return {
    localRemoveContact: (index) => {
      dispatch(removeContact(index));
    },
    localSetCurrentContact: (index, city) => {
      dispatch(setCurrentContact(index));
      dispatch(setWeather((!city) ? city = '' : city));
    },
  };
};

const mapStateToProps = (state) => {
  const contactsArray = [...state.contacts.contacts].filter(function (elem) {
    const searchVal = elem.name.toLowerCase();
    return searchVal.indexOf(state.filterContacts.toLowerCase()) !== -1;
  });
  return {
    contactsArray,
  };
};


ListOfContacts.propTypes = {
  localRemoveContact: PropTypes.func,
  localSetCurrentContact: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(ListOfContacts);
