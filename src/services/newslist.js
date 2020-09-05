import http from '../utils/http';
import { PUBLIC_URL, STORY_URL } from '../constants/app.endpoints';

export const getStories = async (storyId) => {
  const stories = await http.get((`${STORY_URL}` + storyId).json);
  return stories;
};

export const getAllStoryIds = async () => {
  const storiesId = await http.get(`${PUBLIC_URL}`);

  return storiesId;
};
