import React, { useState, useEffect } from 'react';
import { Gradient } from "./assets/gradient";
import Hero from './components/Hero';
import Generator from './components/Generator';
import Learn from './components/Learn';

function App() {

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    /*<main className='min-h-screen flex flex-col bg-[#F7EBD1] text-black text-sm sm:text-base relative'>
      <Hero className='z-99'/>
      <Generator />
      <Learn />*/

      <main className="min-h-screen flex flex-col relative bg-slate-900">
   <div className="relative z-10 flex flex-col flex-1 justify-center max-w-6xl p-10">
      <Hero className="flex justify-center text-black" />
   </div>

      <canvas id="gradient-canvas"  data-transition-in />
    </main>
  );
}

export default App;
