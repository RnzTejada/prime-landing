import React from 'react';
import Hero from './Hero';
// eslint-disable-next-line import/no-named-as-default
import NavBar from './Navbar';

const Header = () => (
  <header className="app-header">
    <div className="items" />
    <Hero />
    <NavBar />
  </header>
);

export default Header;
