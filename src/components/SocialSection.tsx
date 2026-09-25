import React from 'react';
import { Instagram3DIcon, WhatsApp3DIcon, Google3DIcon } from './3DIcons';
import { ExternalLink, ArrowUpRight, Sparkles, Truck } from 'lucide-react';
import { LINKS } from '../data/defaultData';

export const SocialSection: React.FC = () => {
  return (
    <section
      id="redes"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 py-20 bg-[#070709] border-t border-white/[0.06] overflow-x-hidden"
    >
      {/* Subtle background red spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-red-600/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
            Canais Oficiais
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white font-heading tracking-tight mb-3">
            Conecte-se com a Águia
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Atendimento exclusivo, orçamentos para fretes e entregas, novidades e avaliações dos passageiros.
          </p>
        </div>

        {/* 4 Cards 3D Grid — Strictly Vertical on Mobile, 2x2 on Tablet, 4x1 on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Card 1: WHATSAPP OFICIAL */}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-6 flex flex-col items-center text-center card-3d-glow transition-all duration-300 hover:-translate-y-2 border-red-900/30 hover:border-red-500/50 cursor-pointer shadow-[0_10px_35px_rgba(220,38,38,0.12)]"
          >
            {/* Top VIP Badge */}
            <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-red-600 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
              Atendimento Geral
            </div>

            {/* Corner accent link icon */}
            <div className="absolute top-4 right-4 text-neutral-500 group-hover:text-green-400 transition-colors">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            {/* 3D Icon Container */}
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <WhatsApp3DIcon size={80} />
            </div>

            {/* Content */}
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
              WhatsApp
            </span>
            <h3 className="text-lg font-extrabold text-white font-heading mb-2">
              WhatsApp
            </h3>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Viagens executivas, translados particulares e agendamentos diretos.
            </p>

            {/* Button */}
            <div className="mt-auto w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white btn-3d-red flex items-center justify-center gap-2 shadow-lg">
              <span>Chamar no WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </div>
          </a>

          {/* Card 2: NOVO ÍCONE — ORÇAMENTOS, FRETES E ENTREGAS */}
          <a
            href={LINKS.whatsappOrcamentos}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-6 flex flex-col items-center text-center card-3d-glow transition-all duration-300 hover:-translate-y-2 border-red-600/40 hover:border-red-500 cursor-pointer shadow-[0_12px_40px_rgba(220,38,38,0.22)] bg-gradient-to-b from-red-950/20 via-neutral-900/60 to-black"
          >
            {/* High prominence Highlight Badge */}
            <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-[0_2px_10px_rgba(220,38,38,0.5)] flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Destaque Rápido</span>
            </div>

            {/* Corner accent link icon */}
            <div className="absolute top-4 right-4 text-red-400 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            {/* 3D Icon Container */}
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <WhatsApp3DIcon size={80} />
            </div>

            {/* Content */}
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1 justify-center">
              <Truck className="w-3.5 h-3.5" />
              <span>Fretes & Encomendas</span>
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-white font-heading mb-2 leading-snug">
              Orçamentos, Fretes e Entregas
            </h3>
            <p className="text-xs text-neutral-300 mb-6 leading-relaxed">
              Cotações imediatas para coletas, fretes, entregas e volumes urgentes.
            </p>

            {/* Button */}
            <div className="mt-auto w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white btn-3d-red flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(220,38,38,0.6)]">
              <span>Fazer Orçamento</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-90" />
            </div>
          </a>

          {/* Card 3: INSTAGRAM */}
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-6 flex flex-col items-center text-center card-3d-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            {/* Corner accent link icon */}
            <div className="absolute top-4 right-4 text-neutral-500 group-hover:text-pink-400 transition-colors">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            {/* 3D Icon Container */}
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <Instagram3DIcon size={80} />
            </div>

            {/* Content */}
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-500 mb-1">
              Instagram
            </span>
            <h3 className="text-lg font-extrabold text-white font-heading mb-2">
              Instagram
            </h3>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Acompanhe a frota, rotas em tempo real e bastidores @aguia_transportesudi
            </p>

            {/* Button */}
            <div className="mt-auto w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/[0.06] border border-white/10 group-hover:bg-gradient-to-r group-hover:from-pink-600/30 group-hover:to-red-600/30 group-hover:border-red-500/40 transition-all flex items-center justify-center gap-2">
              <span>Acessar Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </div>
          </a>

          {/* Card 4: GOOGLE */}
          <a
            href={LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-6 flex flex-col items-center text-center card-3d-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            {/* Corner accent link icon */}
            <div className="absolute top-4 right-4 text-neutral-500 group-hover:text-blue-400 transition-colors">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            {/* 3D Icon Container */}
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <Google3DIcon size={80} />
            </div>

            {/* Content */}
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Google
            </span>
            <h3 className="text-lg font-extrabold text-white font-heading mb-2">
              Google
            </h3>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Consulte a reputação da empresa, rotas e avaliações com nota máxima.
            </p>

            {/* Button */}
            <div className="mt-auto w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/[0.06] border border-white/10 group-hover:bg-gradient-to-r group-hover:from-blue-600/30 group-hover:to-red-600/30 group-hover:border-blue-500/40 transition-all flex items-center justify-center gap-2">
              <span>Ver no Google</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
