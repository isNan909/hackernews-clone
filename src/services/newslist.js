import http from '../utils/http';
import { STORY_ID, STORY_LIST, JSON_QUERY } from '../constants/app.endpoints';

const PAGE_LIMIT = 20;
const hackerNewsApi = {};
const clientService = new http({ baseURL: http.URL });

const getPageSlice = (limit, page = 0) => ({
  begin: page * limit,
  end: (page + 1) * limit,
});

const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

hackerNewsApi.getTopStoryIds = async () => {
  const storyId = await clientService.get(`${STORY_ID}`);
  return storyId;
};

hackerNewsApi.getStory = async (storyId) => {
  const stories = await clientService.get(
    `${STORY_LIST}` + storyId + `${JSON_QUERY}`
  );
  // console.log(stories);
  return stories;
};

hackerNewsApi.getStoriesByPage = async (storyId, page) => {
  const { begin, end } = await getPageSlice(PAGE_LIMIT, page);
  const activeIds = await getPageValues({ begin, end, items: storyId });
  const storyPromises = await activeIds.map((storyId) =>
    hackerNewsApi.getStory(storyId)
  );
  return Promise.all(storyPromises);
};

export default hackerNewsApi;
