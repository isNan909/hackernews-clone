import React, { useEffect, useState } from 'react';

import { Storylist } from './List/storylist.component';

export const Storywrapper = (props) => {
  console.log(props);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const story = await props.fetchInitialStories();
      console.log(story);
      setStories(story);
    }
    fetchdata();
  });

  return (
    <>
      <Storylist story={stories} />
    </>
  );
};
