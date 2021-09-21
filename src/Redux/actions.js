import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import types from './action-types';

export const addContact = createAction(types.ADD, data => ({
  payload: { id: uuidv4(), name: data.name, number: data.number },
}));

export const deleteContact = createAction(types.DELETE);

export const changeFilter = createAction(types.CHANGE_FILTER);
