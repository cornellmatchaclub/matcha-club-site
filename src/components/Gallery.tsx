import React, { useState } from 'react';
import Modal from './Modal'; // Assuming Modal is in the same directory

interface BasicPageProps {
  onBack?: () => void;
}

// Auto-import all images from the gallery folder
const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,JPG,PNG,jpeg,webp,JPEG,HEIC}', { eager: true });

const IMAGES = Object.values(imageModules).map((module: any, index) => ({
  id: index,
  src: module.default,
  alt: `Matcha Club Gallery Photo ${index + 1}`,
}));

const Gallery: React.FC<BasicPageProps> = ({ onBack }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-10 animate-in fade-in duration-700">

      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#556b2f] hover:text-[#2d4030] mb-10 group"
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

      {/* Masonry Grid with Layout Fixes */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {IMAGES.map((image, idx) => (
          <div
            key={image.id}
            onClick={() => setSelectedImg(image.src)}
            className="break-inside-avoid rounded-2xl overflow-hidden border border-[#2d4030]/5 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group bg-[#f5f0e1]/30 cursor-pointer relative"
            style={{ animationDelay: `${idx * 50}ms` }} // Staggered entrance
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
              style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }} // Smooth fade-in
            />

            {/* Hover State Detail */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white/90 p-3 rounded-full scale-90 group-hover:scale-100 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2d4030]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <Modal onClose={() => setSelectedImg(null)}>
          <div className="w-full h-full flex items-center justify-center bg-transparent">
            <img
              src={selectedImg}
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              alt="Enlarged gallery view"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;