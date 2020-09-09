import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import storeConfig from './store';
import Stories from './components/Stories';

const store = storeConfig({});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Stories />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
