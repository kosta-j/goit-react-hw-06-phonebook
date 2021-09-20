import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import types from './action-types';

const contactItemsReducer = (state = [], { type, payload }) => {
  //duplicated name check:
  if (state.filter(item => item.name === payload.name).length > 0) {
    alert(`${payload.name} is already in contacts`);
    return state;
  }

  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

const contactFilterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: contactItemsReducer,
  filter: contactFilterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
