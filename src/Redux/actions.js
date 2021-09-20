import { v4 as uuidv4 } from 'uuid';
import types from './action-types';

export const addContact = data => ({
  type: types.ADD,
  payload: { id: uuidv4(), name: data.name, number: data.number },
});

export const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export const changeFilter = e => ({
  type: types.CHANGE_FILTER,
  payload: e.target.value,
});
