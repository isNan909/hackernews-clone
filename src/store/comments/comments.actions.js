import hackerNewsApi from '../../services/commentlist';

export const actionTypes = {
  GET_COMMENTS: 'GET COMMENTS',
  GET_COMMENTS_SUCCESS: 'GET_COMMENTS_SUCCESS',
  GET_COMMENTS_FAILURE: 'GET_COMMENTS_FAILURE',
  GET_COMMENT_LIST: 'GET_COMMENT_LIST',
  GET_COMMENT_LIST_SUCESS: 'GET_COMMENT_LIST_SUCESS',
  GET_COMMENT_LIST_FAILED: 'GET_COMMENT_LIST_FAILED',
};

const action = (type, payload) => ({
  type,
  payload,
});

const actions = {
  fetchComments: (payload = {}) => {
    return (dispatch) => {
      dispatch(action(actionTypes.GET_COMMENT_LIST, payload));
      const { commentId } = payload;
      return hackerNewsApi
        .getComments(commentId)
        .then((comments) =>
          dispatch(action(actionTypes.GET_COMMENT_LIST_SUCESS, { comments }))
        )
        .catch((err) =>
          dispatch(action(actionTypes.GET_COMMENT_LIST_FAILED, err))
        );
    };
  },
};

export default actions;
