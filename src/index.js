import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import storeConfig from './store';
import App from './components/App';
import hackerNewsApi from './services/newslist'

const store = storeConfig({});

hackerNewsApi.getTopStoryIds().then(ids=>console.log(ids))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);