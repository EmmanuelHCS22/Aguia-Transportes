import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Fechar visualização"
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-red-600 text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-h-[75vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        <div className="mt-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-1">
            {item.category}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
};
