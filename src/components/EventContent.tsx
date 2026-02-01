
import React from 'react';
import { EVENTS } from '../data/events';

interface EventContentProps {
  onBack?: () => void;
}

const EventContent: React.FC<EventContentProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl w-full mx-auto space-y-16 animate-in slide-in-from-bottom-8 duration-1000 transition-soft pb-24">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#556b2f] hover:text-[#2d4030] transition-colors mb-6 group transition-all duration-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] soft-font">Back to Shelf</span>
        </button>
      )}

      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-[#2d4030] soft-font tracking-tight">Past Events</h2>
        {/* <p className="text-[#556b2f] opacity-50 text-xs md:text-sm font-bold uppercase tracking-[0.4em] soft-font">Moments & Gatherings</p> */}
      </div>

      <div className="space-y-24">
        {EVENTS.map((event, idx) => (
          <div key={event.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 group items-center`}>
            <div className="w-full md:w-3/5 overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-1000 border border-[#8bc34a]/10">
              <img
                src={event.image}
                alt={event.title}
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-[2000ms] transition-soft"
              />
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-center space-y-4 px-4">
              <span className="text-[#8bc34a] text-[10px] font-bold uppercase tracking-[0.3em] soft-font">{event.date}</span>
              <h3 className="text-3xl font-semibold text-[#2d4030] soft-font tracking-tight">{event.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed font-light">{event.description}</p>
              {/* <div className="pt-4 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[#2d4030]/20"></div>
                <span className="text-[10px] text-[#556b2f] opacity-40 font-bold tracking-widest uppercase">Details</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventContent;
