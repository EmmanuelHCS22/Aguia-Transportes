import React from 'react';
import { MessageCircle, ChevronDown, ShieldCheck, Truck } from 'lucide-react';
import { LINKS } from '../data/defaultData';

export const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const el = document.getElementById('redes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 pt-24 pb-8 overflow-x-hidden bg-[#050505]"
    >
      {/* Subtle executive ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-red-600/[0.08] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-10 inset-x-0 h-48 bg-gradient-to-b from-red-950/10 to-transparent pointer-events-none" />

      {/* Grid texture background - subtle luxury */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="my-auto w-full max-w-4xl flex flex-col items-center text-center relative z-10 pt-4">
        {/* Subtle trust tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-wider uppercase text-neutral-300 mb-6 backdrop-blur-sm">
          <ShieldCheck className="w-4 h-4 text-red-500" />
          <span>Atendimento Executivo & Particular</span>
        </div>

        {/* LOGO OFICIAL EM DESTAQUE */}
        <div className="relative mb-6 sm:mb-8 group">
          {/* Subtle 3D halo */}
          <div className="absolute inset-0 rounded-full bg-red-600/25 blur-3xl scale-110 opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-68 md:h-68 rounded-full p-2 bg-gradient-to-b from-neutral-800/80 via-black to-[#050505] border border-white/[0.16] shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(220,38,38,0.25)] flex items-center justify-center overflow-hidden">
            {/* Gloss reflection line */}
            <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[-25deg] pointer-events-none z-10" />
            
            <img
              src="/logo-transparent.png"
              alt="Logo Oficial Águia Transportes"
              className="w-full h-full object-contain filter drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* NOME DA EMPRESA */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-white font-heading mb-3">
          ÁGUIA <span className="text-red-600">TRANSPORTES</span>
        </h1>

        {/* FRASE PRINCIPAL */}
        <p className="text-lg sm:text-2xl font-bold tracking-tight text-neutral-100 max-w-2xl mb-3 leading-snug">
          &ldquo;Transporte com segurança e compromisso.&rdquo;
        </p>

        {/* SUBTÍTULO DESCRITIVO */}
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed mb-6">
          Transporte particular, executivo, eventos, viagens, entregas e muito mais.
        </p>

        {/* BOTÕES DE AÇÃO */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full max-w-md px-4 sm:px-0">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white btn-3d-red transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chamar no WhatsApp</span>
          </a>

          <button
            onClick={scrollToServices}
            className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-200 hover:text-white border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-200 cursor-pointer"
          >
            <span>Conheça Nossos Serviços</span>
          </button>
        </div>

        {/* Quick link to Fretes & Entregas */}
        <a
          href={LINKS.whatsappOrcamentos}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-amber-400 transition-colors py-1 px-3 rounded-full hover:bg-white/[0.04]"
        >
          <Truck className="w-3.5 h-3.5 text-amber-500" />
          <span>Precisa de Fretes ou Entregas? Clique aqui para cotação rápida</span>
        </a>
      </div>

      {/* Scroll indicator to invite vertical navigation */}
      <div className="flex flex-col items-center gap-1 text-neutral-500 pt-4 z-10">
        <span className="text-[11px] uppercase tracking-widest font-semibold text-neutral-400">
          Role para navegar
        </span>
        <button
          onClick={scrollToNext}
          aria-label="Rolar para próxima seção"
          className="p-1.5 rounded-full hover:text-red-500 hover:bg-white/[0.05] transition-colors animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
