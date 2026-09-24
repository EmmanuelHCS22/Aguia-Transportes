import React from 'react';
import { Google3DIcon } from './3DIcons';
import { ExternalLink, Star } from 'lucide-react';
import { LINKS } from '../data/defaultData';

export const GoogleSection: React.FC = () => {
  return (
    <section
      id="google"
      className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 py-20 bg-[#070709] border-t border-white/[0.06]"
    >
      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        {/* 3D Google Icon with Glow */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-xl scale-125 group-hover:scale-150 transition-transform duration-300" />
            <Google3DIcon size={96} className="transform group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Stars representation */}
        <div className="flex items-center justify-center gap-1.5 mb-4 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400" />
          ))}
        </div>

        {/* Exact Title */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white font-heading tracking-tight mb-4">
          ENCONTRE A ÁGUIA TRANSPORTES NO GOOGLE
        </h2>

        {/* Exact text */}
        <p className="text-base sm:text-lg text-neutral-300 font-normal max-w-xl mx-auto mb-10 leading-relaxed">
          Confira nossa empresa, conheça nossos serviços e deixe sua avaliação.
        </p>

        {/* Botão Ver no Google */}
        <div className="flex justify-center">
          <a
            href={LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-red-500/40 transition-all active:scale-95 shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
          >
            <span>VER NO GOOGLE</span>
            <ExternalLink className="w-4 h-4 text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
