import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from '../styled/styles';
import Contact from './Contact';
import { removeContact } from '../actions/actions';

const ListOfContacts = props => (
    <List>
      {
        props.contactsArray.map(function (el, index) {
          return (
            <Contact
              onClick={() => props.localRemoveContact(index)}
              name={el.name}
              key={index}
              phone={el.phone}
              important={el.important}
            />
          );
        })
      }
    </List>
  );

const mapDispatchToProps = (dispatch) => {
  return {
    localRemoveContact: (index) => {
      dispatch(removeContact(index));
    },
  };
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
    important: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ListOfContacts);
