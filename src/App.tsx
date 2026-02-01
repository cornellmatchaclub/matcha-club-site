
import React, { useState, useCallback } from 'react';
import Shelf from './components/Shelf';
import Modal from './components/Modal';
import RecipeContent from './components/RecipeContent';
import EventContent from './components/EventContent';
import HistoryContent from './components/HistoryContent';
import BasicPage from './components/BasicPage';
import type { ModalType, ViewType } from './types';
import logoImg from './assets/matcha-club-logo.png';
import AboutContent from './components/AboutContent';
import Calendar from './components/Calendar';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('shelf');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = useCallback((type: ModalType) => {
    setActiveModal(type);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const navigateTo = useCallback((view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const backToShelf = () => setCurrentView('shelf');

  const renderView = () => {
    switch (currentView) {
      case 'shelf':
        return (
          <div className="w-full max-w-5xl relative animate-in fade-in duration-500 transition-soft">
            <Shelf onModal={openModal} onNavigate={navigateTo} />
          </div>
        );
      case 'events':
        return <EventContent onBack={backToShelf} />;
      // change from basic page to more advanced pgs
      case 'about':
        return <AboutContent onBack={backToShelf} />;
      case 'calendar':
        return <Calendar onBack={backToShelf} />;
      case 'gallery':
        return <Gallery onBack={backToShelf} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf5e6] p-4 transition-colors duration-700">
      {/* logo */}
      <div className="fixed top-4 left-4 z-50 md:top-10 md:left-10 group">
        <div
          className="relative cursor-pointer"
          onClick={backToShelf}
        ></div>
        <div className="relative">
          {/* Subtle glow behind logo */}
          <div className="absolute inset-0 bg-[#8bc34a]/10 blur-xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-500"></div>
          <img
            src={logoImg}
            alt="Matcha Club Logo"
            className="w-14 h-14 md:w-20 md:h-20 rounded-full border-[1px] border-[#2d4030]/10 bg-white shadow-sm group-hover:shadow-md transition-all duration-500 object-contain p-2 relative z-10"
            title="Return to Shelf"
          />
        </div>
        {/* Dropdown Menu */}
        <div className="absolute top-[90%] left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-0">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-[#2d4030]/5 py-3 min-w-[180px] overflow-hidden">
            <DropdownItem label="About" onClick={() => navigateTo('about')} />
            <DropdownItem label="Calendar" onClick={() => navigateTo('calendar')} />
            <DropdownItem label="Gallery" onClick={() => navigateTo('gallery')} />
            <DropdownItem label="Past Events" onClick={() => navigateTo('events')} />
          </div>
        </div>
      </div>
      <header className={`mb-8 text-center transition-all duration-700 transition-soft ${currentView === 'shelf' ? 'mt-12' : 'mt-4'}`}>
        <h1
          className="pt-4 md:pt-0 text-5xl md:text-6xl font-bold text-[#2d4030] mb-2 soft-font tracking-tight cursor-pointer hover:opacity-70 transition-opacity"
          onClick={backToShelf}
        >
          Cornell Matcha Club
        </h1>
        {currentView === 'shelf' && (
          // TODO: change font type?
          <p className="text-[#556b2f] tracking-[0.3em] text-[14px] font-semibold animate-in slide-in-from-top-2 duration-700">
            Cultivating community through matcha 🍵
          </p>
        )}
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
        {renderView()}
      </main>

      <footer className="mt-12 pb-4 text-[#8b4513] text-[12px] text-center tracking-widest">
        <p className='opacity-45'>© 2026 Cornell Matcha Club.</p>
        <p className='normal-case pt-2 md:pt-0 opacity-35'>This organization is a registered student organization of Cornell University.</p>
      </footer>

      {activeModal && (
        <Modal onClose={closeModal}>
          {activeModal === 'recipe' ? <RecipeContent /> : <HistoryContent />}
        </Modal>
      )}
    </div>
  );
};
const DropdownItem: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left px-5 py-2.5 hover:bg-[#f1f8e9] text-[#2d4030] transition-colors duration-200 group/item flex items-center justify-between"
  >
    <span className="text-sm font-medium soft-font tracking-wide">{label}</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-0 group-hover/item:opacity-40 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);
export default App;
