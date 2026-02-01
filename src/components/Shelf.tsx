
import React from 'react';
import bowlImg from '/assets/bowl.png';
import chasenImg from '/assets/chasen.png';
import matchaTins from '/assets/matcha-tins.png';
import aboutBook from '/assets/about-book.png';
import calendarBook from '/assets/calendar-book.png';
import galleryBook from '/assets/gallery-book.png';
import instagramBook from '/assets/instagram-book.png';

import type { ModalType, ViewType } from '../types';

interface ShelfProps {
  onModal: (type: ModalType) => void;
  onNavigate: (view: ViewType) => void;
}

const ASSETS = {
  bowl: bowlImg,
  whisk: chasenImg,
  tinsBlob: matchaTins,
  aboutBook: aboutBook,
  calendarBook: calendarBook,
  galleryBook: galleryBook,
  instagramBook: instagramBook,
};

const Shelf: React.FC<ShelfProps> = ({ onModal, onNavigate }) => {
  return (
    <div className="relative w-full aspect-[4/5] md:aspect-[4/3] max-w-4xl mx-auto">
      {/* Wooden Frame */}
      <div className="absolute inset-0 border-[12px] md:border-[25px] border-[#4a3728] rounded-sm pointer-events-none shadow-2xl z-20"></div>

      {/* Shelves (Responsive Positioning) */}
      <div className="absolute top-[30%] md:top-[40%] left-0 right-0 h-3 md:h-4 bg-[#4a3728] shadow-md z-10"></div>
      <div className="absolute top-[60%] md:top-[85%] left-0 right-0 h-3 md:h-4 bg-[#4a3728] shadow-md z-10"></div>
      <div className="absolute top-[90%] md:hidden left-0 right-0 h-3 bg-[#4a3728] shadow-md z-10"></div>

      {/* MOBILE SHELF 1 / DESKTOP TOP LEFT (Books) */}
      <div className="absolute top-[2%] md:top-[3%] left-0 md:left-[5%] w-full md:w-auto h-[28%] md:h-[38%] flex items-end justify-center md:justify-start px-1 pb-1">
        <div className="flex flex-col items-center md:items-start gap-0">
          <Book label="About" onClick={() => onNavigate('about')} src="" />
          <Book label="Calendar" onClick={() => onNavigate('calendar')} src="" />
          <Book label="Gallery" onClick={() => onNavigate('gallery')} src="" />
          <Book label="Instagram" onClick={() => window.open('https://instagram.com/cornellmatchaclub/', '_blank')} src="" />
        </div>
      </div>

      {/* MOBILE SHELF 2 / DESKTOP TOP RIGHT (Tins) */}
      <div
        onClick={() => onNavigate('events')}
        className="absolute top-[32%] md:top-[3%] right-0 md:right-[5%] w-full md:w-auto h-[28%] md:h-[38%] flex items-end justify-center md:justify-end cursor-pointer group"
      >
        <img
          src={ASSETS.tinsBlob}
          alt="Matcha Tins"
          className="h-[80%] md:h-[85%] object-contain object-bottom origin-bottom drop-shadow-md brightness-[0.98] group-hover:brightness-105 group-hover:scale-[0.80] transition-all duration-500"
        />
      </div>

      {/* MOBILE SHELF 3 / DESKTOP BOTTOM (Bowl & Whisk) */}
      <div className="absolute top-[60%] md:top-[38%] left-0 md:left-[10%] w-full md:w-[80%] h-[30%] md:h-[50%] flex items-end justify-around md:justify-between pb-0 md:pb-2">
        {/* Bowl Container */}
        <div onClick={() => onModal('recipe')} className="relative w-1/2 h-full flex items-end justify-center cursor-pointer group">
          <img src={ASSETS.bowl} alt="Bowl" className="h-[90%] md:h-[70%] object-contain object-bottom origin-bottom group-hover:scale-105 transition-all drop-shadow-xl" />
        </div>
        {/* Whisk Container */}
        <div onClick={() => onModal('whisk')} className="relative w-1/3 h-full flex items-end justify-center cursor-pointer group">
          <img src={ASSETS.whisk} alt="Whisk" className="h-[85%] md:h-[80%] object-contain object-bottom origin-bottom group-hover:scale-105 transition-all drop-shadow-md" />
        </div>
      </div>
    </div>
  );
};

const Book: React.FC<{ label: string; onClick: () => void; src: string }> = ({ label, onClick }) => {
  const getColor = (label: string) => {
    switch (label.toLowerCase()) {
      case 'about': return '#567d46';
      case 'calendar': return '#3d5a32';
      case 'gallery': return '#2d4021';
      case 'instagram': return '#1a2a15';
      default: return '#3d5a32';
    }
  };

  return (
    <div
      onClick={onClick}
      className="relative w-32 md:w-64 h-7 md:h-12 cursor-pointer 
        transition-all duration-300 ease-in-out
        hover:scale-[1.03] hover:z-30 hover:-translate-y-1
        group flex items-center justify-center 
        rounded-sm shadow-[2px_1px_6px_rgba(0,0,0,0.3)]"
      style={{ backgroundColor: getColor(label) }}
    >
      <span className="text-white text-[8px] md:text-sm font-bold tracking-[0.2em] uppercase">
        {label}
      </span>
      <div className="absolute left-0 top-0 bottom-0 w-1 md:w-2 bg-black/10"></div>
    </div>
  );
};

export default Shelf;
