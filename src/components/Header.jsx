/* eslint-disable no-use-before-define */
import React from 'react';
import Hero from './Hero';

const Zoom = require('react-reveal/Zoom');

const Header = () => (
  <header className="app-header">
    <Zoom cascade>
      <div className="items" />
    </Zoom>
    <Hero />
  </header>
);

export default Header;
