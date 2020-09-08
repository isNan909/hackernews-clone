import React, { useEffect } from 'react';

import { Storylist } from './List/storylist.component';

export const Storywrapper = (stories) => {

  console.log(stories);

  useEffect(() => {
    const data = stories.fetchInitialStories();
    console.log(data);
  });

  return <Storylist/>;
};
