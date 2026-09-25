import React from 'react';
import { MessageCircle, ShieldCheck, Clock, Award, Truck } from 'lucide-react';
import { LINKS } from '../data/defaultData';

export const QuoteSection: React.FC = () => {
  return (
    <section
      id="orcamento"
      className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 py-20 bg-[#050505] border-t border-white/[0.06] overflow-x-hidden"
    >
      {/* Intense dark luxury ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-wider uppercase text-neutral-300 mb-6">
          <Award className="w-4 h-4 text-red-500" />
          <span>Atendimento Personalizado 24 Horas</span>
        </div>

        {/* Título Principal */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white font-heading tracking-tight mb-6">
          PRECISA DE <span className="text-red-600">TRANSPORTE?</span>
        </h2>

        {/* Texto descritivo exato */}
        <p className="text-base sm:text-xl text-neutral-300 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Conte com a Águia Transportes para transportar você, sua equipe, seus clientes ou suas encomendas com segurança e compromisso.
        </p>

        {/* Botões de Contato e Orçamento */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          {/* Botão Principal WhatsApp Geral */}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white btn-3d-red transition-transform active:scale-95 shadow-[0_12px_35px_rgba(220,38,38,0.5)]"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>FALE CONOSCO NO WHATSAPP</span>
          </a>

          {/* Botão Orçamentos, Fretes e Entregas */}
          <a
            href={LINKS.whatsappOrcamentos}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-amber-500/40 hover:border-amber-400 transition-all active:scale-95 shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
          >
            <Truck className="w-5 h-5 text-amber-400" />
            <span>ORÇAMENTOS, FRETES E ENTREGAS</span>
          </a>
        </div>

        <span className="text-xs text-neutral-500 block mt-4">
          Resposta rápida · Atendimento sob agendamento e coletas urgentes
        </span>

        {/* 3 Core Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/[0.08] text-left">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-red-500 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Segurança Total</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Veículos revisados e condutores experientes com discrição absoluta.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-red-500 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Pontualidade Britânica</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Cumprimento rigoroso de horários em voos, reuniões e eventos.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-red-500 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Compromisso Real</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Atendimento sob medida para clientes corporativos, eventos e particulares.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
