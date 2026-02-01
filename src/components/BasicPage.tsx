
import React from 'react';

interface BasicPageProps {
  title: string;
  content: string;
  onBack?: () => void;
}

const BasicPage: React.FC<BasicPageProps> = ({ title, content, onBack }) => {
  return (
    <div className="max-w-2xl w-full mx-auto text-center space-y-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500 transition-soft">
      {onBack && (
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#556b2f] hover:text-[#2d4030] transition-colors mx-auto mb-10 group transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] soft-font">Back to Shelf</span>
        </button>
      )}

      <h2 className="text-5xl md:text-7xl font-bold text-[#2d4030] soft-font tracking-tight">{title}</h2>
      <div className="w-16 h-1 bg-[#8bc34a]/40 mx-auto rounded-full"></div>
      
      <p className="text-gray-600 text-lg md:text-2xl leading-relaxed font-light px-4 max-w-xl mx-auto">
        {content}
      </p>

      <div className="pt-20">
        <div className="flex justify-center gap-6 opacity-5">
           <div className="w-10 h-10 bg-[#8bc34a] rounded-full rotate-12"></div>
           <div className="w-10 h-10 bg-[#556b2f] rounded-full -rotate-6"></div>
           <div className="w-10 h-10 bg-[#2d4030] rounded-full rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default BasicPage;
