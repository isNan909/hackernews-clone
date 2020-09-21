import http from './http';
import { URL } from '../constants/app.endpoints';

const hackerNewsApi = {};
const clientService = new http({ baseURL: http.URL });

hackerNewsApi.getCommentID = async (storyId) => {
  const commentID = await clientService.get(`${URL}/item/` + storyId + `.json`);
  return commentID;
};

hackerNewsApi.getComments = async (commentID) => {
  const comments = await clientService.get(
    `${URL}/item/` + commentID + `.json`
  );
  return comments;
};

export default hackerNewsApi;
