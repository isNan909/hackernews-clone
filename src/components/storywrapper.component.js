import React, { useEffect } from 'react';

import { Storylist } from './List/storylist.component';

export const Storywrapper = (props) => {
  const { fetchInitialStories } = props;
  useEffect(() => {
    fetchInitialStories();
  });

  return (
    <>
      <Storylist story={props.stories} />
    </>
  );
};
