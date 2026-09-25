import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { Maximize2, Plus, Filter } from 'lucide-react';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Extract unique categories
  const categories = ['Todos', ...Array.from(new Set(gallery.map((item) => item.category)))];

  const filteredGallery =
    selectedCategory === 'Todos'
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="galeria"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-20 bg-[#070709] border-t border-white/[0.06] overflow-x-hidden"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-red-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header with Title and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
              Galeria de Operações
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white font-heading tracking-tight">
              ÁGUIA TRANSPORTES NA ESTRADA
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mt-2">
              Registros reais de viagens executivas, traslados em aeroportos, eventos especiais e operações na estrada.
            </p>
          </div>

          {onOpenManageModal && (
            <button
              onClick={onOpenManageModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors self-start sm:self-auto shrink-0"
            >
              <Plus className="w-3.5 h-3.5 text-red-500" />
              <span>Adicionar / Gerenciar Fotos</span>
            </button>
          )}
        </div>

        {/* Category Filters — Wrapped vertically without horizontal overflow */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-neutral-400 text-xs font-medium mr-1">
            <Filter className="w-3.5 h-3.5 text-red-500" />
            <span>Filtrar:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-[0_2px_12px_rgba(220,38,38,0.5)]'
                  : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pure Vertical Responsive Grid — No Horizontal Scroll Ever */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id || index}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#0e0e12] border border-white/[0.08] hover:border-red-600/50 transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.18)] hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/logo-transparent.png';
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-black/30 to-black/20 group-hover:via-black/10 transition-colors" />

                {/* Top zoom indicator badge */}
                <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-white/80 group-hover:text-white group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300 shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-bold uppercase tracking-wider text-red-400">
                  {item.category}
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="p-5 sm:p-6 bg-[#0e0e12] flex items-center justify-between border-t border-white/[0.06]">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Toque para visualizar em alta resolução
                  </p>
                </div>

                <div className="hidden sm:flex items-center text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
                  <span>Ampliar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical scroll guidance */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          <span>Role a página para continuar navegando pelos serviços e orçamentos</span>
        </div>
      </div>
    </section>
  );
};
