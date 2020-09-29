import { actionTypes } from './comments.actions';

export const initialState = {
  commentId: [],
  comments: [],
  hasErrors: false,
  isFetching: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_COMMENT_LIST:
      return { ...state, isFetching: true };
    case actionTypes.GET_COMMENT_LIST_SUCESS:
      return {
        ...state,
        comments: action.payload,
        isFetching: false,
        hasErrors: false,
      };
    case actionTypes.GET_COMMENT_LIST_FALIURE:
      return { ...state, isFetching: false, hasErrors: true };
    default:
      return state;
  }
}
