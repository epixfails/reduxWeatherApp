
export function addContact(newname, num, importanceState) {
  return {
    type: 'ADD_USER',
    user: { name: newname, phone: num, important: importanceState },
  };
}

export function filterContact(filterStr) {
  return {
    type: 'FILTER_USER',
    filter: filterStr,
  };
}


export function removeContact(key) {
  return {
    type: 'REMOVE_USER',
    id: key,
  };
}
