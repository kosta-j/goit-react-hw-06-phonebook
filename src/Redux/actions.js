export const addContact = contact => ({
  type: 'contacts/add_contact',
  payload: contact,
});

export const deleteContact = id => ({
  type: 'contacts/delete_contact',
  payload: id,
});

export const changeFilter = e => ({
  type: 'contacts/filter',
  payload: e.target.value,
});
