import types from './action-types';

export const addContact = contact => ({
  type: types.ADD,
  payload: contact,
});

export const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export const changeFilter = e => ({
  type: types.CHANGE_FILTER,
  payload: e.target.value,
});
