import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Storylistitem } from '../ListItem/listitem.component';
import Loader from '../Loader/Loader';

export const Storylist = ({ story, hasMoreStoriesSelector }) => {
  const fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = story;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };
  return (
    <>
      <InfiniteScroll
        className="infiniteWrapper"
        dataLength={story.length}
        next={fetchStories}
        hasMore={hasMoreStoriesSelector}
        loader={<Loader />}
      >
        <Storylistitem story={story} />
      </InfiniteScroll>
    </>
  );
};
