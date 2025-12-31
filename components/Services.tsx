
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';

const ServiceRow: React.FC<{ item: ServiceItem }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative flex items-center justify-between py-12 border-b border-gray-100 cursor-pointer transition-all duration-500 hover:px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-baseline gap-8 md:gap-16">
        <span className="text-[10px] md:text-xs font-medium text-gray-400 font-sans tracking-widest">{item.number}</span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-primary tracking-tight transition-transform duration-500 group-hover:font-normal">
          {item.title}
        </h2>
      </div>
      
      <div className="transition-transform duration-500 group-hover:rotate-45">
        <span className="material-symbols-outlined text-primary !text-4xl">arrow_outward</span>
      </div>

      {/* Hover Image Reveal */}
      <div className={`absolute right-[20%] top-1/2 -translate-y-1/2 w-48 h-64 z-20 pointer-events-none hidden lg:block overflow-hidden rounded-lg shadow-2xl transition-all duration-700 ease-out grayscale hover:grayscale-0 ${
        isHovered ? 'opacity-100 scale-100 rotate-3 translate-x-10' : 'opacity-0 scale-90 rotate-0 translate-x-0'
      }`}>
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 px-6 md:px-20 lg:px-40 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-baseline justify-between border-b border-gray-200 pb-6 mb-8">
          <h3 className="text-xs font-bold text-gray-400 tracking-[0.3em] uppercase">Services</h3>
          <span className="text-sm font-serif italic text-gray-400">Curated Offerings</span>
        </header>

        <div className="flex flex-col">
          {SERVICES.map((service) => (
            <ServiceRow key={service.id} item={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
