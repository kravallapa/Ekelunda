import React from 'react';

interface HeroProps {
  onReadMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReadMore }) => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-stone-900">
        <img 
          /* 
             INSTRUKTION: 
             För att använda din egen bild:
             1. Lägg bildfilen i projektmappen (t.ex. hero.jpg)
             2. Ändra src nedan till: src="/hero.jpg"
          */
          src="/images/hero.jpg" 
          alt="Ekelunda Gård Landscape" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-earth-50 mb-6 tracking-wide drop-shadow-md">
          Ekelunda Gård
        </h1>
        <p className="text-xl md:text-2xl text-earth-100 max-w-2xl mb-10 font-light drop-shadow-sm text-shadow">
          Småskalig uppfödning av islandshästar i hjärtat av Skåne. 
          Där passion möter natur.
        </p>
        <button 
          onClick={onReadMore}
          className="bg-moss-700 hover:bg-moss-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border border-moss-500"
        >
          Möt våra hästar
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};