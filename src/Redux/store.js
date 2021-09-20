import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

const contactItemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'contacts/add_contact':
      return state.push(payload);

    default:
      return state;
  }
};

const contactFilterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'contacts/filter':
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
