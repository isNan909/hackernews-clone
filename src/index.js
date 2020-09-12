import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './app';
import storeConfig from './store';
import './stylesheet/main.scss';

const store = storeConfig({});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
 