import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from '../assets/react.svg';

export const Navbar = () => {
  return (
    <Router>
      <nav>
        <div className="hkroute container">
          <div className="hkroute__left">
            <Link to="/">
              <img src={Logo} alt="react logo" />
            </Link>
            <Link to="/">Top</Link>
            <Link to="/">New</Link>
            <Link to="/">Show</Link>
            <Link to="/">Ask</Link>
            <Link to="/">Jobs</Link>
          </div>
          <div className="hkroute__right">
            <Link to="/">Built with React</Link>
          </div>
        </div>
      </nav>
    </Router>
  );
};
