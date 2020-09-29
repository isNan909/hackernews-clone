import React, { useEffect, useState } from 'react';

import Loader from '../Loader/Loader';
import hackerNewsApi from '../../services/commentlist';

export const Comment = ({ commentId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    hackerNewsApi
      .getComments(commentId)
      .then((data) => {
        setComment(data);
        setIsLoading(false);
      })
      .catch();
  }, [commentId]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul style={{ padding: 10 }}>
          <div>{comment.by}</div>
          <div dangerouslySetInnerHTML={{ __html: comment.text }}></div>
          {comment?.kids?.map((commentId) => (
            <Comment commentId={commentId} key={commentId} />
          ))}
        </ul>
      )}
    </>
  );
};
