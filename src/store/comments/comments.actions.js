import hackerNewsApi from '../../services/commentlist';

export const actionTypes = {
  GET_COMMENTS: 'GET COMMENTS',
  GET_COMMENTS_SUCCESS: 'GET_COMMENTS_SUCCESS',
  GET_COMMENTS_FAILURE: 'GET_COMMENTS_FAILURE',
};

const action = (type, payload) => ({
  type,
  payload,
});

const actions = {
  fetchComments: (payload = {}) => {
    const { commentId } = payload;
    return (dispatch) => {
      dispatch(action(actionTypes.GET_COMMENTS, payload));
      return hackerNewsApi.getComments(commentId);
    };
  },
};

export default actions;
