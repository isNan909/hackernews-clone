import React, { useState } from 'react';

import { getAllStoryIds } from '../services/newslist';
import { useQuery } from 'react-query';

export const Storywrapper = () => {
  const fetchStories = async () => {
    const fetchstoriesId = await getAllStoryIds().then((data) =>
      setStoryIds(data)
    );
    return fetchstoriesId;
  };

  const [storyIds, setStoryIds] = useState([]);
  const { status } = useQuery('Story', fetchStories);
  console.log(storyIds);
  return (
    <>
      <p>List of stories here</p>
      <ul>
        {storyIds.map((story) => (
          <div key={story}>
            <li>{story}</li>
          </div>
        ))}
      </ul>
      <p>{status}</p>
    </>
  );
};
