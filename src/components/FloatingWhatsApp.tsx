import React, { useState } from 'react';
import { LINKS } from '../data/defaultData';
import { MessageCircle, Truck, X, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Atendimento Rápido WhatsApp" className="fixed bottom-6 right-5 sm:right-7 z-40 flex flex-col items-end">
      {/* Floating Options Card Popup */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#0e0e12]/95 backdrop-blur-xl border border-white/15 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(220,38,38,0.2)] animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Atendimento Águia
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar menu de atendimento"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-300 mb-3">
            Escolha o canal de atendimento ideal para você:
          </p>

          <div className="flex flex-col gap-2.5">
            {/* Option 1: WhatsApp Geral */}
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.05] hover:bg-red-600/20 border border-white/10 hover:border-red-500/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 fill-emerald-500" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold uppercase text-white group-hover:text-red-400 transition-colors">
                  WhatsApp Geral
                </h4>
                <p className="text-[11px] text-neutral-400">
                  Particular, executivo, eventos e viagens
                </p>
              </div>
            </a>

            {/* Option 2: Orçamentos, Fretes e Entregas */}
            <a
              href={LINKS.whatsappOrcamentos}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-red-500/10 hover:from-amber-500/20 hover:to-red-500/20 border border-amber-500/30 hover:border-amber-400/60 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                <Truck className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold uppercase text-white group-hover:text-amber-300 transition-colors">
                    Orçamentos & Fretes
                  </h4>
                  <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-[9px] font-bold text-amber-300">
                    Novo
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  Cotações, fretes, entregas e encomendas
                </p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center group">
        {!isOpen && (
          <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-black/90 text-white text-xs font-bold uppercase tracking-wider border border-white/10 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Falar no WhatsApp
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir canais de WhatsApp"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center btn-3d-red transition-all duration-300 group-hover:scale-110 active:scale-95 shadow-[0_10px_30px_rgba(220,38,38,0.7)] cursor-pointer"
        >
          {/* Subtle breathing red pulse ring */}
          <span className="absolute inset-0 rounded-full bg-red-500 opacity-40 animate-ping pointer-events-none" />

          {/* 3D Glass top reflection */}
          <span className="absolute top-1 inset-x-2 h-1/2 rounded-t-full bg-gradient-to-b from-white/35 to-transparent pointer-events-none" />

          {/* Official WhatsApp phone icon */}
          {isOpen ? (
            <X className="w-7 h-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-10" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-10"
            >
              <path d="M12.004 2C6.48 2 2 6.48 2 12.008c0 1.947.56 3.766 1.527 5.308L2.24 21.68l4.498-1.266a9.96 9.96 0 0 0 5.266 1.488h.004c5.523 0 10.003-4.48 10.003-10.004 0-2.673-1.04-5.187-2.93-7.078A9.957 9.957 0 0 0 12.004 2zm5.828 14.288c-.244.685-1.424 1.306-1.954 1.35-.494.04-1.127.06-3.606-.967-3.17-1.31-5.212-4.545-5.37-4.757-.158-.212-1.289-1.716-1.289-3.272 0-1.557.817-2.324 1.107-2.64.29-.316.634-.395.845-.395.211 0 .423.003.608.012.196.01.46-.074.72.55.264.634.9 2.197.978 2.355.08.158.132.343.026.554-.105.212-.158.343-.316.529-.158.185-.333.413-.476.554-.158.158-.324.33-.14.646.185.316.822 1.338 1.764 2.176 1.213 1.078 2.235 1.413 2.552 1.57.316.158.502.132.686-.08.185-.21.793-.923 1.004-1.24.212-.316.423-.263.714-.157.29.105 1.848.871 2.165 1.03.317.158.528.237.607.369.08.132.08.766-.164 1.451z" />
            </svg>
          )}
        </button>
      </div>
    </aside>
  );
};
