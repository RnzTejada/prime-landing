import React from 'react';
import BrokenSection from './components/BrokenSystem';
import Hero from './components/Hero';
// eslint-disable-next-line import/no-named-as-default
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
      <BrokenSection />
    </>
  );
}

export default App;
