import React from 'react';
import {connect} from 'react-redux';
import {List} from '../styled/styles.js';
import Contact from './Contact.js';

const ListOfContacts = props => {
  return(
    <List>
      {
        props.contactsArray.map(function(el, index){
          return <Contact
                  name = {el.name}
                  key = {index}
                  phone = {el.phone}
                  />
        })
      }
    </List>
  )
}

const mapStateToProps = state => {
  const contactsFiltered = [...state.contacts].filter(function(elem){
    let searchVal = elem.name.toLowerCase()
    return searchVal.indexOf(state.filterValue) !== -1
  })
  return {
    contactsArray: contactsFiltered,
  }
}


export default connect(mapStateToProps)(ListOfContacts);
