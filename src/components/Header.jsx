import React from 'react';
import Particles from 'react-particles-js';
import Hero from './Hero';
// eslint-disable-next-line import/no-named-as-default
import NavBar from './Navbar';
// import particlesConfig from '../utils/particlesConfig';

const Header = () => (
  <div
    className="app-header"
    // style={{ position: 'relative', overflow: 'hidden' }}
  >
    {/* <div style={{ position: 'absolute' }}>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div> */}
    <NavBar />
    <Hero />
    {/* <div id="partciles-1" /> */}
  </div>
);

export default Header;
