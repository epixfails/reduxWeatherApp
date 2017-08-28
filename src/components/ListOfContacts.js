import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, ListEmpty, ImgEmptyList } from './styles';
import Contact from './Contact';
import { removeContact, setWeather, setCurrentContact } from '../actions/actions';
import cry from '../img/cry.svg';

const ListOfContacts = props => (
  <List>
    {props.contactsToDisplay === 0 && (
      <ListEmpty><ImgEmptyList src={cry} />You have no contacts</ListEmpty>
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
      dispatch(setWeather(city));
    },
  };
};

const mapStateToProps = (state) => {
  const contactsFiltered = [...state.contacts].filter(function (elem) {
    const searchVal = elem.name.toLowerCase();
    return searchVal.indexOf(state.filterValue) !== -1;
  });
  return {
    contactsToDisplay: contactsFiltered.length,
    contactsArray: contactsFiltered,
  };
};

ListOfContacts.PropTypes = {
  contactsToDisplay: PropTypes.number.isRequired,
  contactsFiltered: PropTypes.array,
  localRemoveContact: PropTypes.func,
  localSetCurrentContact: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(ListOfContacts);
