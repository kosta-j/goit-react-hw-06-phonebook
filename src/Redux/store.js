import {
  combineReducers,
  configureStore,
  createReducer,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer,
);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: { contacts: persistedContactsReducer },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };

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
