
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AIConceptModal from './components/AIConceptModal';

const App: React.FC = () => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Gallery />

        {/* AI Integration Trigger */}
        <section className="py-24 bg-primary text-white text-center px-6 overflow-hidden relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">
              Let's Create <br /> Together
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-12 text-lg font-light leading-relaxed">
              Ready to elevate your social presence with high-quality mobile videography? Let our AI assistant help jumpstart your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsAIModalOpen(true)}
                className="bg-white text-primary text-xs font-bold px-10 py-4 rounded-full hover:scale-105 transition-all uppercase tracking-widest flex items-center gap-2"
              >
                <span className="material-symbols-outlined !text-lg">auto_awesome</span>
                AI Creative Assistant
              </button>
              <button className="bg-transparent border border-white/20 text-white text-xs font-bold px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-all uppercase tracking-widest">
                Book a Shoot
              </button>
            </div>
          </div>
          
          {/* Abstract background elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
        </section>
      </main>

      <footer className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl font-bold text-primary tracking-tighter mb-4 uppercase">SHOT BY MO</span>
            <span className="text-[10px] text-gray-400 font-sans tracking-widest uppercase">© 2024 ShotByMo. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-10">
            {['Instagram', 'TikTok', 'YouTube'].map(social => (
              <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-primary hover:opacity-40 transition-opacity">
                {social}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
            <span className="material-symbols-outlined !text-sm">location_on</span>
            <span>Los Angeles, CA</span>
          </div>
        </div>
      </footer>

      <AIConceptModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
      />
    </div>
  );
};

export default App;
