import React from 'react';
import Introduction from './Introduction';
import About from './About';
import Navigation from './Navigation';
import Contact from './Contact';
import Page from '../screens/Page';

const Home = () => (
  <>
    <Navigation />
    <Introduction />
    <Page />
    <About />
    <Contact />
  </>
);

export default Home;
