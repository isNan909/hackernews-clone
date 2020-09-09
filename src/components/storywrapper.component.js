import React, { useEffect } from 'react';

import { Storylist } from './List/storylist.component';

export const Storywrapper = (stories) => {
  // console.log(stories);

  useEffect(() => {
    const story = stories.fetchInitialStories();
    console.log(story);
  });

  return <Storylist story={stories} />;
};
