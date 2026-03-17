import React from 'react';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-earth-50 border-t border-earth-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Icon Container */}
          <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center text-earth-800 border border-earth-100 mb-2 transform -rotate-3 transition-transform hover:rotate-0 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-moss-700">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900">
            Följ livet på gården
          </h2>
          
          <p className="text-earth-600 text-lg max-w-lg leading-relaxed">
            Vi uppdaterar löpande med bilder från vardagen, träning av hästarna och såklart massor av fölmys.
          </p>

          <a 
            href="https://instagram.com/ekelundagard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 bg-moss-700 hover:bg-moss-800 text-white text-lg font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center gap-3"
          >
            <span>Gå till vår Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <p className="text-sm text-earth-400 font-serif italic mt-4">
            @ekelundagard
          </p>
        </div>
      </div>
    </section>
  );
};