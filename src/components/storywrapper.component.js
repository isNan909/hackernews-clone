import React, { useEffect } from 'react';

import { Storylist } from './List/storylist.component';

export const Storywrapper = (props) => {

  useEffect(() => {
    const data = props.fetchInitialStories();
    console.log(data);
  });
  return <Storylist />;
};
