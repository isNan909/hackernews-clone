import React from 'react';

export const Storylistitem = (stories) => {
  console.log(stories, 'Storylistitem');
  return (
    <>
      <ul>
        {stories.map((x) => (
          <li key={stories.id}>{x.by}</li>
        ))}
      </ul>
    </>
  );
};
