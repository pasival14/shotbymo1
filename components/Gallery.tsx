
import React from 'react';
import { GALLERY_PROJECTS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-10 lg:px-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter mb-4">Selected Works</h2>
            <p className="font-script text-3xl md:text-4xl text-gray-400">captured & curated moments</p>
          </div>
          <a href="#" className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:opacity-50 transition-opacity">
            View All Projects
            <span className="material-symbols-outlined !text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {GALLERY_PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-gray-200 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{project.category}</span>
                <h3 className="text-white text-3xl md:text-4xl font-script italic">{project.title}</h3>
              </div>
              
              {/* Play Button Icon */}
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <span className="material-symbols-outlined text-white !text-2xl">play_arrow</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
