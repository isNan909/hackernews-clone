import React from 'react';

export const Storylistitem = ({ story }) => {
  return (
    <>
      <ul>
        {story && story.length > 0 ? (
          <>
            {story.map((x) => (
              <li key={x.id}>{x.by}</li>
            ))}
          </>
        ) : (
          <>Loading ...</>
        )}
      </ul>
    </>
  );
};
