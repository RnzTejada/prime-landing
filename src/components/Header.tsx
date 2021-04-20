import React from 'react';
import Hero from './Hero';
// eslint-disable-next-line import/no-named-as-default
import NavBar from './Navbar';

const Fade = require('react-reveal/Fade');

const Header = () => (
  <div className="app-header">
    <Fade top>
      <NavBar />
      <Hero />
    </Fade>
  </div>
);

export default Header;
