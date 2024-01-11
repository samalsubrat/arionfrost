import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './Hero';
import Page2 from './Page2';
import PageThree from './PageThree';
import Hello from './Spline';
import Preloader from './Preloader';
import {AnimatePresence} from 'framer-motion'
import Slide from './Slide';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
        setTimeout(() => {
          setIsLoading(false);
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <>
       <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
      <Hero />
      <Page2 />
      <PageThree />
      <Hello />
      {/* <Slide/> */}

      <PageThree />
    </>
  );
};

export default App;
