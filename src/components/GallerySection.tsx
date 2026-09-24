import React, { useRef } from 'react';
import { GalleryItem } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, Plus } from 'lucide-react';

interface GallerySectionProps {
  gallery: GalleryItem[];
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenManageModal?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  gallery,
  onOpenLightbox,
  onOpenManageModal,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="galeria"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-20 bg-[#070709] border-t border-white/[0.06]"
    >
      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
              Galeria de Operações
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white font-heading tracking-tight">
              ÁGUIA TRANSPORTES NA ESTRADA
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mt-2">
              Registros reais de veículos, viagens intermunicipais, chegadas em eventos e atendimento corporativo.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {onOpenManageModal && (
              <button
                onClick={onOpenManageModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors mr-2"
              >
                <Plus className="w-3.5 h-3.5 text-red-500" />
                <span>Adicionar Foto</span>
              </button>
            )}

            {/* Carousel navigation buttons */}
            <button
              onClick={() => scroll('left')}
              aria-label="Foto anterior"
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white border border-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Próxima foto"
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white border border-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {gallery.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative flex-none w-[290px] sm:w-[380px] md:w-[440px] aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-white/[0.08] hover:border-red-600/50 transition-all duration-300 cursor-pointer snap-start shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:-translate-y-1.5"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo-transparent.png';
                }}
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity" />

              {/* Top zoom indicator */}
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white/80 group-hover:text-white group-hover:bg-red-600 transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
          <span>Arraste horizontalmente para navegar</span>
          <span>Clique em qualquer foto para ampliar</span>
        </div>
      </div>
    </section>
  );
};
