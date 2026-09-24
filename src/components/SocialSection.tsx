import React from 'react';
import { Instagram3DIcon, WhatsApp3DIcon, Google3DIcon } from './3DIcons';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { LINKS } from '../data/defaultData';

export const SocialSection: React.FC = () => {
  return (
    <section
      id="redes"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 py-20 bg-[#070709] border-t border-white/[0.06]"
    >
      {/* Subtle background red spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-red-600/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
            Canais Oficiais
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white font-heading tracking-tight mb-3">
            Conecte-se com a Águia
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto">
            Atendimento imediato, novidades de viagens e avaliações dos nossos passageiros.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: INSTAGRAM */}
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center card-3d-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            {/* Corner accent link icon */}
            <div className="absolute top-4 right-4 text-neutral-500 group-hover:text-red-400 transition-colors">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            {/* 3D Icon Container */}
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <Instagram3DIcon size={80} />
            </div>

            {/* Content */}
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-500 mb-1">
              Instagram Oficial
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white font-heading mb-2">
              @aguia_transportesudi
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
              Veja nossos serviços e novidades
            </p>

            {/* Button */}
            <div className="mt-auto w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/[0.06] border border-white/10 group-hover:bg-gradient-to-r group-hover:from-pink-600/30 group-hover:to-red-600/30 group-hover:border-red-500/40 transition-all flex items-center justify-center gap-2">
              <span>Acessar Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </div>
          </a>

          {/* Card 2: WHATSAPP (Featured in center) */}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center card-3d-glow transition-all duration-300 hover:-translate-y-2 border-red-900/30 hover:border-red-500/50 cursor-pointer shadow-[0_10px_35px_rgba(220,38,38,0.15)]"
          >
            {/* Badge for VIP attention */}
            <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-red-600 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
              Atendimento Direto
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
              WhatsApp Comercial
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white font-heading mb-2">
              Fale Conosco
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
              Solicite seu orçamento agora
            </p>

            {/* Button */}
            <div className="mt-auto w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white btn-3d-red flex items-center justify-center gap-2 shadow-lg">
              <span>Chamar no WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </div>
          </a>

          {/* Card 3: GOOGLE */}
          <a
            href={LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center card-3d-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer"
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
              Perfil no Google
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white font-heading mb-2">
              Veja no Google
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
              Avalie nosso atendimento e rotas
            </p>

            {/* Button */}
            <div className="mt-auto w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/[0.06] border border-white/10 group-hover:bg-gradient-to-r group-hover:from-blue-600/30 group-hover:to-red-600/30 group-hover:border-blue-500/40 transition-all flex items-center justify-center gap-2">
              <span>Avaliar Empresa</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
