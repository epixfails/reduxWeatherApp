
export function addContact(newname, num){
  return {
    type: 'ADD_USER',
    user: {name: newname, phone: num}
  }
}

export function filterContact(filterStr){
  return {
    type: 'FILTER_USER',
    filter: filterStr,
  }
}


export function removeContact(newname, num){
  return {
    type: 'REMOVE_USER',
    user: {name: newname, phone: num}
  }
}
