import http from './http';
import { URL } from '../constants/app.endpoints';

const hackerNewsApi = {};
const clientService = new http({ baseURL: http.URL });

hackerNewsApi.getComments = async (storyId) => {
  const comments = await clientService.get(`${URL}/` + storyId + `.json`);
  console.log(comments);
  debugger;
  return comments;
};

export default hackerNewsApi;
