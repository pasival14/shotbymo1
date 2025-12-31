
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-4 md:space-y-6 animate-fade-in">
        {/* Logo Icon */}
        <div className="size-20 md:size-28 bg-primary rounded-full flex items-center justify-center mb-6 shadow-xl">
          <span className="material-symbols-outlined text-white !text-4xl md:!text-5xl">videocam</span>
        </div>

        {/* Branding */}
        <h1 className="text-primary text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] uppercase">
          SHOT BY MO
        </h1>
        
        <p className="font-script text-4xl md:text-6xl text-gray-500 mt-2 font-normal leading-tight">
          mobile videography & editing
        </p>

        <div className="pt-16 md:pt-24 flex flex-col items-center">
          <a 
            href="#work" 
            className="group flex flex-col items-center gap-4 text-primary text-xs font-bold tracking-[0.3em] uppercase hover:opacity-60 transition-all"
          >
            <span>See Work</span>
            <div className="overflow-hidden h-8">
               <span className="material-symbols-outlined !text-xl transition-transform duration-300 group-hover:translate-y-4">arrow_downward</span>
            </div>
          </a>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full max-w-4xl max-h-4xl bg-gradient-to-tr from-gray-50 to-transparent rounded-full blur-[120px] opacity-70"></div>
    </section>
  );
};

export default Hero;
