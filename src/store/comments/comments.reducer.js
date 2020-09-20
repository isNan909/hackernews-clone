import { actionTypes } from './comments.actions';

export const initialState = {
  loading: false,
  hasErrors: false,
  comments: [],
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_COMMENTS:
      return { ...state, loading: true };
    case actionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actionTypes.GET_COMMENTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
