import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
