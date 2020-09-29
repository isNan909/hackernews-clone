import React, { useEffect } from 'react';

import { Storylist } from './List/storylist.component';

export const Storywrapper = (props) => {
  const { fetchInitialStories } = props;
  useEffect(() => {
    fetchInitialStories();
  }, [fetchInitialStories]);

  return (
    <section className="story-wrapper container">
      <Storylist story={props.stories} />
    </section>
  );
}; 
