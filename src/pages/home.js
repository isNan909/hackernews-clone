import React from 'react';

import { Navbar } from '../components/navbar.component';
import { Storywrapper } from '../components/storywrapper.component';
import { getTopStoriesId } from '../services/newslist';

getTopStoriesId().then((ids) => console.log(ids));

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Storywrapper />
    </>
  );
};
