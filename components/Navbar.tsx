
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-6 transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="flex-1 hidden md:flex items-center gap-8">
        <a href="#work" className="text-primary text-sm font-semibold tracking-wider hover:opacity-50 transition-opacity">WORK</a>
        <a href="#services" className="text-primary text-sm font-semibold tracking-wider hover:opacity-50 transition-opacity">SERVICES</a>
      </div>
      
      <div className="flex-1 flex justify-center">
        <h1 className="text-primary text-xl md:text-2xl font-bold tracking-[0.2em] uppercase">SHOT BY MO</h1>
      </div>
      
      <div className="flex-1 flex justify-end gap-6 items-center">
        <a href="#about" className="hidden md:block text-primary text-sm font-semibold tracking-wider hover:opacity-50 transition-opacity">ABOUT</a>
        <button className="bg-primary text-white text-[10px] md:text-xs font-bold px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all uppercase tracking-widest">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
