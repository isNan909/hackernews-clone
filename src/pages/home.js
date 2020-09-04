import React from 'react';

import { Navbar } from '../components/navbar.component';
import { Storylist } from '../components/storylist.component';

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <p>Our main homescreen</p>
      <Storylist />
    </>
  );
};
