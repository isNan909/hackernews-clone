import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import actions from '../store/comments/comments.actions';

import { Comment } from '../components/Comments/Comment';
import Loader from '../components/Loader/Loader';

export const StoryComments = ({
  match,
  dispatch,
  loading,
  hasError,
  comments,
}) => {
  useEffect(() => {
    const { id } = match.params;
    dispatch(actions.fetchComments(id));
  }, [dispatch, match]);

  console.log(match, 'match');

  const renderComments = () => {
    if (loading) return <Loader />;
    if (hasError) return <p>Sorry, no comments available.</p>;

    return (
      comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      )) ?? null
    );
  };
  return <>{renderComments()}</>;
};

// const mapDispatchToProps = (dispatch) => ({
//   fetchInitialComments: () => dispatch(actions.fetchComments(comment.id)),
// });

const mapStateToProps = (state) => {
  // console.log(state.comments);
  // debugger
  return {
    comments: state.comment.comments,
    loading: state.comment.loading,
    hasErrors: state.comment.hasErrors,
  };
};

// const mapStateToProps = (state, props) => {
//   log here
//     return {
//       errorMessage,
//       code: urlCode || '',
//       isPendingApi: state.users?.isPendingApi,
//       createAccountSuccess: state?.users?.createAccountSuccess ?? false
//     };
//   };

export default connect(mapStateToProps)(StoryComments);
