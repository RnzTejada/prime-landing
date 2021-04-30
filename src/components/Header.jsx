import React from 'react';
import Hero from './Hero';
// eslint-disable-next-line import/no-named-as-default
import NavBar from './Navbar';

const Zoom = require('react-reveal/Zoom');

const Header = () => (
  <header className="app-header">
    <Zoom cascade>
      <div className="items" />
    </Zoom>
    <Hero />
    <NavBar />
  </header>
);

export default Header;
