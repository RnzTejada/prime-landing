import React from 'react';
import BrokenSection from './components/BrokenSystem';
import Footer from './components/Footer';
import Header from './components/Header';
import LitleSection from './components/LitleSection';
import ParadigmSection from './components/NewParadigm';
import OpenMarket from './components/OpenMarket';

function App() {
  return (
    <>
      <Header />
      <BrokenSection />
      <ParadigmSection />
      <OpenMarket />
      <LitleSection />
      <Footer />
    </>
  );
}

export default App;
