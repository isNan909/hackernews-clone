import axios from 'axios';

import config from 'config';

/**
 * Http Utility.
 */
const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    'Content-Type': 'application/json',
  },
});

function get(url, { params = {}, responseType = 'json', headers = {} } = {}) {
  return instance({
    url,
    params,
    responseType,
    method: 'get',
    headers: { ...headers },
  }).then((response) => response);
}

const http = {
  ...instance,
  get,
};

export default http;
