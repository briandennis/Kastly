import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './app';

const entryNode = document.getElementById('app');

const store = configureStore();

store.subscribe((state) => {
  console.log('State Updated');
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  entryNode);
