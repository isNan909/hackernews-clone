import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import actions from '../store/comments/comments.actions';

import { Comment } from '../components/Comments/Comment';
import Loader from '../components/Loader/Loader';

export const StoryComments = ({
  match,
  fetchInitialComments,
  comments,
  isFetching,
}) => {
  useEffect(() => {
    const { id } = match.params;
    fetchInitialComments({
      commentId: id,
    });
  }, [fetchInitialComments, match]);
  return (
    <section className="story-wrapper container">
      {isFetching ? (
        <Loader />
      ) : (
        comments?.comments?.kids?.map((commentId) => (
          <Comment commentId={commentId} key={commentId} />
        )) ?? null
      )}
    </section>
  );
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
  fetchInitialComments: (id) => dispatch(actions.fetchComments(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryComments);
