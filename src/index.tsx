import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IonReactRouter } from '@ionic/react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

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

const middlewareList: any = process.env.NODE_ENV === 'development' ?
  logger 
  :
  '';

const store = createStore(
  userReducer,
  applyMiddleware(middlewareList),
);

ReactDOM.render(
  <Provider store={store}>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </Provider>, 
  document.getElementById('root')
);