import React from 'react';
import { Horse } from '../types';

interface HorseCardProps {
  horse: Horse;
}

export const HorseCard: React.FC<HorseCardProps> = ({ horse }) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - horse.birthYear;
  const displayAge = age === 0 ? "Föl" : `${age} år`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-earth-200 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-earth-100">
        <img 
          src={horse.imageUrl} 
          alt={horse.name} 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-earth-800 uppercase tracking-wider shadow-sm">
          {horse.gender}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-semibold text-earth-800 group-hover:text-moss-700 transition-colors leading-tight">
            {horse.name}
          </h3>
          <span className="text-earth-500 font-serif italic text-lg whitespace-nowrap ml-2">{displayAge}</span>
        </div>
        
        <div className="text-sm font-medium text-moss-600 mb-4">
          Född {horse.birthYear}
        </div>
        
        <div className="text-sm text-earth-700 leading-relaxed italic">
          e. {horse.sire || 'Okänd'} <br /> u. {horse.dam || 'Okänd'}
        </div>
      </div>
    </div>
  );
};