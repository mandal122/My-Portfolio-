
import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/headerbg/1920/1080')" }}
      ></div>
      <div className="relative z-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          Expert Digital Marketer
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-light max-w-3xl mx-auto mb-8">
          Driving Growth with Data-Driven Strategies in Meta Ads, Google Ads, & Conversion Optimization.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-accent text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-500 transition-colors duration-300 transform hover:scale-105"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
};

export default Header;
