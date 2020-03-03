import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IonReactRouter } from '@ionic/react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

// Store user data from Firebase
const userReducer = (state={}, action: any) => {
  switch(action.type){
    case `SET_USER`:
      return action.payload;
    case `UNSET_USER`:
      return {};
    default:
      return state;
  }
}

// Store tasks from Firebase
const taskReducer = (state=[], action: any) => {
  switch(action.type){
    case `SET_TASK_LIST`:
      return [...state, action.payload];
    case `CLEAR_REDUCER`:
      return [];
    default:
      return state;
  }
}

// Only user logger when in development mode
const middlewareList: any = process.env.NODE_ENV === 'development' ?
  logger 
  :
  '';

// Create reducer store, combine reducers, apply logger middleware
const store = createStore(
  combineReducers({
  userReducer,
  taskReducer
  }),
  applyMiddleware(middlewareList),
);

// Wrap main App.js component in Ionic's router and Redux's reducer provider
ReactDOM.render(
  <Provider store={store}>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </Provider>, 
  document.getElementById('root')
);