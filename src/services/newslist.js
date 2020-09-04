import http from '../utils/http';
import { newStoriesUrl, storyUrl } from '../constants/app.endpoints';

export const getStories = async (storyId) => {
  const res = await http.get((`${storyUrl}` + storyId).json);
  return res.data;
};

export const getStoryIds = async () => {
  const result = await http.get(`${newStoriesUrl}`);

  return result.data;
};
