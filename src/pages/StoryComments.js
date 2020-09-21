import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import actions from '../store/comments/comments.actions';

import { Comment } from '../components/Comments/Comment';

export const StoryComments = (props) => {
  const { fetchInitialComments } = props;
  useEffect(() => {
    fetchInitialComments();
  }, [fetchInitialComments]);
  return <Comment comment={props.commentId} />;
};

const mapStateToProps = (state) => {
  return {
    comments: state.comment.comments,
    commentId: state.comment.commentID,
    isFetching: state.comment.isFetching,
    hasErrors: state.comment.hasErrors,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchInitialComments: () => dispatch(actions.fetchComments()),
  fetchAllComments: ({ commentId }) =>
    dispatch(actions.fetchCommentID({ commentId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryComments);
