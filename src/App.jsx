import React from 'react'
import Navbar from "./components/Nav"
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Project from './components/Project';
import Experiance from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased overflow-y-auto scrollbar-hidden scroll-smooth h-screen">
      <div className="fixed insert-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8 overflow-y-auto scrollbar-hidden scroll-smooth h-screen">
        <Navbar />
        <Hero />
        <Technologies />
        <Project />
        <Experiance />
        <Contact />
      </div>
    </div>
  );
};

export default App;
