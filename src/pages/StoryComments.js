import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import actions from '../store/comments/comments.actions';

import { Comment } from '../components/Comments/Comment';
import Loader from '../components/Loader/Loader';

export const StoryComments = (match, dispatch, loading, hasError, comments) => {
  useEffect(() => {
    const { id } = match.params;
    dispatch(actions.fetchComments(id));
  }, [dispatch, match]);

  const renderComments = () => {
    if (loading.comments) return <Loader />;
    if (hasError.comments) return <p>Sorry, no comments available.</p>;

    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };
  return <>{renderComments()}</>;
};

// const mapDispatchToProps = (dispatch) => ({
//   fetchInitialComments: () => dispatch(actions.fetchComments(comment.id)),
// });

const mapStateToProps = (state) => ({
  comments: state.comments.comments,
  loading: { comments: state.comments.loading },
  hasErrors: { comments: state.comments.hasErrors },
});

export default connect(mapStateToProps)(StoryComments);
