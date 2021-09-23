import { combineReducers, createReducer } from '@reduxjs/toolkit';
import types from './action-types';

const contactItemsReducer = createReducer([], {
  [types.ADD]: addContact,
  [types.DELETE]: deleteContact,
});

const contactFilterReducer = createReducer('', {
  [types.CHANGE_FILTER]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: contactItemsReducer,
  filter: contactFilterReducer,
});

function addContact(state, { payload }) {
  //duplicated name check:
  if (state.filter(item => item.name === payload.name).length > 0) {
    alert(`${payload.name} is already in contacts`);
    return state;
  }
  return [...state, payload];
}

function deleteContact(state, { payload }) {
  return state.filter(item => item.id !== payload.id);
}

export default contactsReducer;
