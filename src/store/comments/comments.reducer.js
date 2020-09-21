import { actionTypes } from './comments.actions';

export const initialState = {
  commentId: [],
  comments: [],
  hasErrors: false,
  isFetching: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_COMMENTS:
      return { ...state, isFetching: true };
    case actionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isFetching: true,
        hasErrors: false,
      };
    case actionTypes.GET_COMMENTS_FAILURE:
      return { ...state, isFetching: false, hasErrors: true };
    default:
      return state;
  }
}
