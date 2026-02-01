import React from 'react';
import { HISTORY_INFO } from '../data/constants';

const HistoryContent: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#2d4030] soft-font tracking-tight mb-3">{HISTORY_INFO.title}</h2>
        <div className="w-12 h-1 bg-[#8bc34a]/30 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start pt-4">

        <div className="w-full md:w-1/3 bg-gradient-to-b from-[#fdfbf7] to-[#f5f0e1] rounded-[40px] md:rounded-[60px] border border-[#d7ba8d]/30 relative flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/de/db/27/dedb279a2d4a206c5e90a0816aa3b745.jpg"
            alt="Bamboo Whisk Icon"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>

        <div className="flex-1 space-y-6">
          {HISTORY_INFO.content.map((item, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed font-light text-[16px]">
              {item}
            </p>
          ))}

          <div className="bg-[#fffdf0] p-6 border-l-2 border-[#fcd34d] rounded-r-2xl">
            <p className="text-xs text-[#92400e]/80 font-light leading-relaxed">
              <span className="font-bold uppercase tracking-wider text-[10px] block mb-1">Tip:</span>
              Always soak your chasen in warm water for a minute before whisking. This makes the bamboo tines flexible and prevents them from snapping.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryContent;