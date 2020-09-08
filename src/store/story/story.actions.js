import hackerNewsApi from '../../services/newslist';

export const actionTypes = {
  FETCH_STORY_IDS_REQUEST: `FETCH_STORY_IDS_REQUEST`,
  FETCH_STORY_IDS_SUCESS: `FETCH_STORY_IDS_SUCESS`,
  FETCH_STORY_IDS_FAILED: `FETCH_STORY_IDS_FAILED`,
  FETCH_STORY_REQUEST: `FETCH_STORY_REQUEST`,
  FETCH_STORY_SUCESS: `FETCH_STORY_SUCESS`,
  FETCH_STORY_FAILED: `FETCH_STORY_FAILED`,
};

const action = (type, payload) => ({
  type,
  payload,
});

const actions = {
  fetchStoryIds: (payload = {}) => {
    return (dispatch) => {
      dispatch(action(actionTypes.FETCH_STORY_IDS_REQUEST, payload));
      console.log(hackerNewsApi);
      return hackerNewsApi.getTopStoryIds().then((storyIds) => {
        dispatch(action(actionTypes.FETCH_STORY_IDS_SUCESS, { storyIds }));
        dispatch(actions.fetchStories({ storyIds, page: 0 }));
        return storyIds;
      });
    };
  },

  fetchStories: (payload = {}) => {
    return (dispatch) => {
      dispatch(action(actionTypes.FETCH_STORY_REQUEST, payload));
      const { storyIds, page } = payload;
      return hackerNewsApi
        .getStoriesByPage(storyIds, page)
        .then((stories) =>
          dispatch(action(actionTypes.FETCH_STORY_SUCESS, { stories }))
        )
        .catch((err) => dispatch(action(actionTypes.FETCH_STORY_FAILED, err)));
    };
  },
};
export default actions;
