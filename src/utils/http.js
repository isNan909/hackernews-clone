import axios from 'axios';

import config from '../config';

const instance = axios.create({
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
  }).then((response) => response.data);
}

const http = {
  ...instance,
  get,
};

export default http;
