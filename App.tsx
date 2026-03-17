import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { HorseCard } from './components/HorseCard';
import { StableAssistant } from './components/StableAssistant';
import { InstagramFeed } from './components/InstagramFeed';
import { HORSES, SOLD_HORSES, ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from './constants';
import { PageView } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageView>(PageView.HOME);

  // Helper to scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ page, label, sectionId }: { page?: PageView, label: string, sectionId: string }) => (
    <button 
      onClick={() => scrollToSection(sectionId)}
      className="text-earth-800 hover:text-moss-700 font-medium tracking-wide transition-colors px-3 py-2"
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-40 transition-all border-b border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-moss-800 rounded-full flex items-center justify-center mr-3 text-white font-serif text-xl font-bold">
                E
              </div>
              <span className="text-xl font-serif font-bold text-earth-900 tracking-tight">
                Ekelunda Gård
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink label="Våra Hästar" sectionId="horses" />
              <NavLink label="Avel" sectionId="breeding" />
              <NavLink label="Kontakt" sectionId="contact" />
            </nav>

            {/* Mobile Menu Button (simplified for this demo) */}
            <div className="md:hidden text-earth-800">
               <button onClick={() => scrollToSection('contact')}>Kontakt</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        
        {/* Hero Section */}
        <Hero onReadMore={() => scrollToSection('horses')} />

        {/* Introduction Section */}
        <section className="py-20 bg-earth-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-moss-600 font-bold tracking-widest uppercase text-sm mb-4 block">Om Gården</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-8">
              Livet på Ekelunda
            </h2>
            <p className="text-lg text-earth-700 leading-relaxed mb-8">
              Beläget bland Skånes böljande fält och lummiga skogar finner du Ekelunda Gård. 
              Här har vi dedikerat våra liv åt islandshästen. Vår filosofi bygger på respekt för djuren, 
              naturlig hästhållning och en kärlek till det nordiska arvet. Våra {HORSES.length} hästar strövar fritt 
              på stora ytor, vilket ger harmoniska och hållbara individer.
            </p>
          </div>
        </section>

        {/* Horses Grid Section */}
        <section id="horses" className="py-24 bg-white px-4 border-t border-earth-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-earth-900 mb-4">Våra Hästar</h2>
              <div className="h-1 w-20 bg-moss-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-earth-600 max-w-2xl mx-auto">
                Möt individerna som gör Ekelunda till vad det är. Från erfarna läromästare till lovande unghästar och föl.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {HORSES.map(horse => (
                <HorseCard key={horse.id} horse={horse} />
              ))}
            </div>

            {/* Sold Horses Section */}
            {SOLD_HORSES.length > 0 && (
              <div className="mt-20 pt-10 border-t border-earth-100">
                <h3 className="text-2xl font-serif font-bold text-earth-800 text-center mb-8">Tidigare hästar / Sålda</h3>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  {SOLD_HORSES.map((horse, idx) => (
                    <span key={idx} className="bg-earth-50 text-earth-700 px-4 py-2 rounded-full border border-earth-200 text-sm font-medium">
                      {horse.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Breeding Info Section */}
        <section id="breeding" className="py-24 bg-stone-100 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <img 
                /* 
                   INSTRUKTION: 
                   1. Spara din bild på fölet som "foal.jpg" i projektmappen.
                   2. Koden nedan hämtar den bilden.
                */
                src="/images/foal.jpg" 
                alt="Framtidens stjärna - Föl på Ekelunda Gård" 
                className="rounded-lg shadow-xl w-full aspect-[3/2] object-cover object-center"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-moss-700 font-bold tracking-widest uppercase text-sm mb-2 block">Avel</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-6">
                Framtidens Stjärnor
              </h2>
              <div className="space-y-4 text-earth-700 leading-relaxed">
                <p>
                  Vår avel är småskalig men ambitiös. Vi väljer noga ut hingstar som kompletterar våra ston, 
                  med fokus på att förstärka goda gångarter, samarbetsvilja och ett starkt psyke.
                </p>
                <p>
                  Vi tror att en bra uppväxt är grunden för en hållbar ridhäst. Våra föl växer upp i 
                  blandade flockar i kuperad terräng, vilket bygger styrka och social kompetens från start.
                </p>
                <ul className="space-y-2 mt-4">
                  {[
                    'Fokus på exteriör och hälsa',
                    'Välmeriterade hingstar',
                    'Naturlig uppväxt på lösdrift',
                    'Individuell hantering'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-earth-800 font-medium">
                      <svg className="w-5 h-5 text-moss-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <InstagramFeed />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-moss-900 text-earth-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Kom och hälsa på!</h2>
            <p className="text-lg text-moss-100 mb-12 max-w-2xl mx-auto">
              Vi tar gärna emot besök efter överenskommelse. Oavsett om du är intresserad av en häst, 
              vill diskutera avel eller bara njuta av miljön.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-moss-800/50 p-6 rounded-lg backdrop-blur-sm border border-moss-700">
                <div className="w-12 h-12 bg-moss-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Adress</h3>
                <p className="text-moss-100">{ADDRESS}</p>
              </div>

              <div className="bg-moss-800/50 p-6 rounded-lg backdrop-blur-sm border border-moss-700">
                <div className="w-12 h-12 bg-moss-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Email</h3>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-moss-100 hover:text-white transition-colors">{CONTACT_EMAIL}</a>
              </div>

              <div className="bg-moss-800/50 p-6 rounded-lg backdrop-blur-sm border border-moss-700">
                <div className="w-12 h-12 bg-moss-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Telefon</h3>
                <p className="text-moss-100">{CONTACT_PHONE}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-earth-900 text-earth-400 py-8 border-t border-earth-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Ekelunda Gård. Alla rättigheter reserverade.</p>
          <div className="mt-4 text-sm opacity-60">
            Designad med kärlek till islandshästen.
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <StableAssistant />
    </div>
  );
};

export default App;