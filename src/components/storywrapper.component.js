import React, { useState } from 'react';

import { getAllStoryIds, getStoriesfromId } from '../services/newslist';
import { useQuery } from 'react-query';

export const Storywrapper = () => {
  const fetchStories = async () => {
    const fetchstoriesId = await getAllStoryIds()
    const res = fetchstoriesId.slice(0, 20);
    res.forEach(element => { 
      console.log(element);
      // getStoriesfromId(element).then(result => { 
      //   setStoryIds(result);
      // })
      setStoryIds(res);
    })
  };

  const [storyIds, setStoryIds] = useState([]);
  const { status } = useQuery('', fetchStories);
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