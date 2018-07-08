import './sass/index.scss';
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './app/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composedMiddleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  reducer,
  composedMiddleware
);

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>, 
  document.getElementById('app'));
