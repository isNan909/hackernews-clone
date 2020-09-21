import React from 'react';

import Loader from '../Loader/Loader';

export const Comment = ({ comments }) => (
  <>
    {comments && comments.length > 0 ? (
      <ul>
        {comments.map((x) => (
          <li>{x.id}</li>
        ))}
      </ul>
    ) : (
      <Loader />
    )}
  </>
);
