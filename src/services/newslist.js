import http from '../utils/http';
import { STORY_ID, STORY_LIST, JSON_QUERY } from '../constants/app.endpoints';

const PAGE_LIMIT = 20;
const getPageSlice = (limit, page = 0) => ({
  begin: page * limit,
  end: (page + 1) * limit,
});
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

export const getStoriesfromId = async (storyId) => {
  const stories = await http.get(`${STORY_LIST}` + storyId + `${JSON_QUERY}`);
  return stories; 
};

export const getTopStoriesId = async () => {
  const storiesId = await http.get(`${STORY_ID}`);
  return storiesId;
};

export const getStoriesByPage = async (ids, page) => {
  const { begin, end } = getPageSlice(PAGE_LIMIT, page);
  const activeIds = getPageValues({ begin, end, items: ids });
  const getEachStories = activeIds.map((id) => getStoriesfromId(id));
  return Promise.all(getEachStories);
};
