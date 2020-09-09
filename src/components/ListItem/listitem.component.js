import React from 'react';

export const Storylistitem = ({ story }) => {
  // console.log(story);
  return (
    <>
      <ul>
        {story.map((x) => (
          <li key={x.id}>{x.by}</li>
        ))}
      </ul>
    </>
  );
};
