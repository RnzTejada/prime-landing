import React from 'react';
import Hero from './Hero';
// eslint-disable-next-line import/no-named-as-default
import NavBar from './Navbar';

const Header = () => (
  <div className="app-header">
    <NavBar />
    <Hero />
  </div>
);

export default Header;
