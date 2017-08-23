import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from '../styled/styles';
import Contact from './Contact';

const ListOfContacts = (props) => {
  return (
    <List>
      {
        props.contactsArray.map(function (el, index) {
          return (
            <Contact
              name={el.name}
              key={index}
              phone={el.phone}
            />
          );
        })
      }
    </List>
  );
};

const mapStateToProps = (state) => {
  const contactsFiltered = [...state.contacts].filter(function (elem) {
    const searchVal = elem.name.toLowerCase();
    return searchVal.indexOf(state.filterValue) !== -1;
  });
  return {
    contactsArray: contactsFiltered,
  };
};

ListOfContacts.PropTypes = {
  contactsArray: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};


export default connect(mapStateToProps)(ListOfContacts);
