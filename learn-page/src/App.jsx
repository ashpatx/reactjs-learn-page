import React, { useState, useEffect } from 'react';
import { Gradient } from 'whatamesh';
import Hero from './components/Hero';
import Generator from './components/Generator';
import Learn from './components/Learn';

function App() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <main className='min-h-screen flex flex-col bg-[#F7EBD1] text-black text-sm sm:text-base relative'>
      <canvas id="gradient-canvas">
        
        </canvas> 
        <Hero className='z-99'/>
      <Generator />
      <Learn />
    </main>
  );
}

export default App;
