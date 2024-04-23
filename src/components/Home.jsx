import React from 'react';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import About from './About';
import Navigation from './Navigation';
import Contact from './Contact';

const Home = () => (
  <>
    <Navigation />
    <Introduction />
    <Portfolio />
    <About />
    <Contact />
  </>
);

export default Home;
