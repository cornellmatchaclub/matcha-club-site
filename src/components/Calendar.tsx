
import React from 'react';

const Calendar: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="max-w-6xl w-full mx-auto text-center space-y-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500 transition-soft">
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

      <h2 className="text-5xl font-bold text-[#2d4030] soft-font tracking-tight">Club Calendar</h2>
      <div className="w-16 h-1 bg-[#8bc34a]/40 mx-auto rounded-full"></div>

      <div className='flex justify-center'>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&title=Cornell%20Matcha%20Club%20Events&src=Y29ybmVsbG1hdGNoYWNsdWJAZ21haWwuY29t&color=%2348b342" style={{ borderWidth: 0 }} width="1000" height="600" frameBorder="0" scrolling="no"></iframe>
      </div>

    </div>
  );
};

export default Calendar;
