import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/filter':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: action.payload,
        },
      };

    default:
      console.log('default');
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
