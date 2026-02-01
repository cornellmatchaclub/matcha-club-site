import React from 'react';

interface BasicPageProps {
  onBack?: () => void;
}

// Replace these with your actual image paths or local imports
const IMAGES = [
  { id: 1, src: '/images/gallery/photo1.jpg', alt: 'Matcha whisking' },
  { id: 2, src: '/images/gallery/photo2.jpg', alt: 'E-board meeting' },
  { id: 3, src: '/images/gallery/photo3.jpg', alt: 'Latte art' },
  { id: 4, src: '/images/gallery/photo4.jpg', alt: 'Matcha tools' },
  { id: 5, src: '/images/gallery/photo5.jpg', alt: 'Club gathering' },
  { id: 6, src: '/images/gallery/photo6.jpg', alt: 'Ceramics and tea' },
  { id: 7, src: '/images/gallery/photo7.jpg', alt: 'Matcha ceremony' },
  { id: 8, src: '/images/gallery/photo8.jpg', alt: 'Matcha preparation' },
  { id: 9, src: '/images/gallery/photo9.jpg', alt: 'Club members' },
  { id: 10, src: '/images/gallery/photo10.jpg', alt: 'Tea tasting' },
  // ... add as many as you'd like
];

const Gallery: React.FC<BasicPageProps> = ({ onBack }) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#556b2f] hover:text-[#2d4030] transition-colors mb-10 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] soft-font">Back to Shelf</span>
        </button>
      )}

      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-[#2d4030] soft-font tracking-tight">
          Photo Gallery
        </h2>
        <div className="w-16 h-1 bg-[#8bc34a]/40 mx-auto rounded-full"></div>
      </div>

      {/* Pinterest Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {IMAGES.map((image) => (
          <div
            key={image.id}
            className="break-inside-avoid rounded-2xl overflow-hidden border border-[#2d4030]/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group bg-white"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Optional Overlay on Hover */}
            <div className="absolute inset-0 bg-[#2d4030]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;