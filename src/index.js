import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import storeConfig from './store';
import Stories from './components/Stories';
import './stylesheet/main.scss';
import { Navbar } from './components/navbar.component';

const store = storeConfig({});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Navbar />
      <Stories />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
