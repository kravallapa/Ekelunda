import React, { useEffect } from 'react';
import { RETRIEVER_BOOKING_EMAIL, CONTACT_PHONE, ADDRESS } from '../constants';

const CHECKLIST = [
  'Önskat datum',
  '3 timmar eller heldag',
  'Antal personer',
  'Vilken del av marken du vill boka',
];

export const RetrieverPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Retrieverträning i Skåne — hyr mark | Ekelunda Gård';
  }, []);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-moss-900 text-earth-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-moss-300 font-bold tracking-widest uppercase text-sm mb-4 block">Hyr mark</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Retrieverträning på Ekelunda
          </h1>
          <p className="text-lg text-moss-100 max-w-2xl mx-auto leading-relaxed">
            Träna din retriever i varierad skånsk terräng — dammar, öppen vall, skog och viltvatten.
            Du hyr den del av marken du vill träna på och har den för er själva.
          </p>
        </div>
      </section>

      {/* Map + Areas */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">Marken</h2>
            <div className="h-1 w-20 bg-moss-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-earth-600 max-w-2xl mx-auto">
              Vid bokning anger du vilken del av marken du vill träna på.
              Tillgängligheten avgörs av var hästarna går för tillfället.
            </p>
          </div>

          <img
            src="/images/marken.jpg"
            alt="Karta över marken på Ekelunda Gård med Stora dammen, Fiskedammen, Vallen, Viltvattnet och parkering markerade"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </section>

      {/* Prices */}
      <section className="py-20 bg-earth-50 px-4 border-t border-earth-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">Priser</h2>
            <div className="h-1 w-20 bg-moss-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md border border-earth-100 p-8 text-center">
              <h3 className="font-serif font-bold text-earth-900 text-xl mb-2">3 timmar</h3>
              <p className="text-4xl font-serif font-bold text-moss-700 mb-2">250 kr</p>
              <p className="text-earth-600">per person</p>
            </div>
            <div className="bg-white rounded-lg shadow-md border border-earth-100 p-8 text-center">
              <h3 className="font-serif font-bold text-earth-900 text-xl mb-2">Heldag</h3>
              <p className="text-4xl font-serif font-bold text-moss-700 mb-2">500 kr</p>
              <p className="text-earth-600">per person</p>
            </div>
          </div>

          <p className="text-center text-earth-700 mt-8">
            Priset gäller per person — det går bra att ta med flera hundar.
          </p>

          <div className="bg-white rounded-lg shadow-md border border-earth-100 p-8 text-center mt-8">
            <h3 className="font-serif font-bold text-earth-900 text-xl mb-2">Gruppträning, kurs eller jaktprov?</h3>
            <p className="text-earth-600">
              Det går även att boka marken för gruppträning, kurser och jaktprov — hör av dig för offert.
            </p>
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="py-20 bg-white px-4 border-t border-earth-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">Bra att veta</h2>
            <div className="h-1 w-20 bg-moss-500 mx-auto rounded-full"></div>
          </div>
          <ul className="space-y-4">
            {[
              'Skott är tillåtet — med sunt förnuft.',
              'Du bokar en specifik del av marken. Vilka delar som är tillgängliga beror på var hästarna går.',
              'Parkering sker på anvisad plats — markerad som "Parkering" på kartan.',
              'Plocka upp efter din hund och ta med ditt eget skräp hem.',
              'Visa hänsyn för boende och grannar.',
            ].map((item, i) => (
              <li key={i} className="flex items-start text-earth-800">
                <svg className="w-5 h-5 text-moss-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking */}
      <section id="boka" className="py-20 bg-moss-900 text-earth-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Boka träningstid</h2>
          <p className="text-lg text-moss-100 mb-4 max-w-2xl mx-auto">
            Boka via SMS eller mejl — SMS:a hellre än ring.
          </p>
          <p className="text-moss-100 mb-10 max-w-2xl mx-auto">
            Skriv med: {CHECKLIST.join(' · ').toLowerCase()}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:0706971641"
              className="bg-white text-moss-900 font-semibold px-8 py-4 rounded-lg shadow hover:bg-moss-50 transition-colors"
            >
              SMS:a {CONTACT_PHONE}
            </a>
            <a
              href={`mailto:${RETRIEVER_BOOKING_EMAIL}?subject=Bokning%20retrievertr%C3%A4ning`}
              className="bg-moss-700 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-moss-600 transition-colors border border-moss-600"
            >
              Mejla {RETRIEVER_BOOKING_EMAIL}
            </a>
          </div>

          <p className="text-moss-100 mt-10">
            Betalning sker via Swish till <span className="font-semibold text-white">123-434 42 48</span>.
          </p>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 bg-earth-50 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">Hitta hit</h2>
          <div className="h-1 w-20 bg-moss-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-earth-800 font-medium mb-2">{ADDRESS}</p>
          <p className="text-earth-600 mb-8 max-w-xl mx-auto">
            Kör mot Södra Hultarp utanför Hallaröd. Parkeringen ligger vid vägen
            norr om Stora dammen — följ markeringen på kartan och parkera endast där.
          </p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-moss-800 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-moss-700 transition-colors"
          >
            Vägbeskrivning i Google Maps
          </a>
        </div>
      </section>
    </>
  );
};
