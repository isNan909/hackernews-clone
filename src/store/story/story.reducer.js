import { actionTypes } from './story.actions';

const initialState = () => ({
  storyIds: [],
  stories: [],
  page: 0,
  isFetching: false,
  error: '',
});

const story = (state = initialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_STORY_IDS_REQUEST:
    case actionTypes.FETCH_STORY_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_STORY_IDS_SUCESS:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.FETCH_STORY_SUCESS:
      return {
        ...state,
        stories: [...state.stories, ...payload.stories],
        page: state.page + 1,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default story;
