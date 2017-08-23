import connect from react-redux;

const getFiltered = (contacts, filter) => {
  if(filter){
    contacts.filter(function(elem){
      let searchVal = elem.name.toLowerCase()
      return searchVal.indexOf(searchStr) !== -1
    })
    return contacts;
  }
}


export default connect(mapStateToProps)(getFiltered)
