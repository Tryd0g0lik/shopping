// src\frontend\src\reduxs\store.ts

// https://redux.js.org/tutorials/quick-start#create-a-redux-store
// https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

import { legacy_createStore as createStore, combineReducers } from 'redux';
import { rootReducer } from './Reducers/index.ts';
// eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/strict-boolean-expressions
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */
const store = createStore(
  rootReducer,
  composeEnhancers
);

export type RooteStore = typeof store;
export type RootStateCategory = ReturnType<typeof store.getState>;
export type RootDispatch = ReturnType<typeof store.dispatch>;
export function storeDispatch(action: any): any {
  return store.dispatch(action);
}

export function storeGetstate(): any {
  return store.getState();
}

export default store;
