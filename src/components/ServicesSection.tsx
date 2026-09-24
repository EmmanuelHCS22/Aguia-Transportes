import React from 'react';
import { ServiceItem } from '../types';
import { MessageCircle, Plus, Edit3 } from 'lucide-react';
import { LINKS } from '../data/defaultData';

interface ServicesSectionProps {
  services: ServiceItem[];
  onOpenManageModal?: () => void;
  onEditService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onOpenManageModal,
  onEditService,
}) => {
  const getWhatsAppLinkForService = (serviceName: string) => {
    const text = encodeURIComponent(`Olá! Gostaria de um orçamento para o serviço de ${serviceName} com a Águia Transportes.`);
    // Keep exact user base WhatsApp link
    return `${LINKS.whatsapp}?text=${text}`;
  };

  return (
    <section
      id="servicos"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-20 bg-[#050505] border-t border-white/[0.06]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-red-600/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">
              Excelência & Pontualidade
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white font-heading tracking-tight">
              NOSSOS SERVIÇOS
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mt-2">
              Soluções completas de transporte com máxima segurança, pontualidade e discrição.
            </p>
          </div>

          {onOpenManageModal && (
            <button
              onClick={onOpenManageModal}
              className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
            >
              <Plus className="w-4 h-4 text-red-500" />
              <span>Adicionar / Trocar Fotos</span>
            </button>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              className="group relative rounded-2xl bg-[#0d0d10] border border-white/[0.08] hover:border-red-600/40 transition-all duration-300 flex flex-col overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_32px_rgba(220,38,38,0.15)] hover:-translate-y-1"
            >
              {/* Service Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <img
                  src={service.image}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Styled resilient fallback
                    (e.currentTarget as HTMLImageElement).src = '/logo-transparent.png';
                  }}
                />

                {/* Gradient Scrim for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-black/30 pointer-events-none" />

                {/* Service index tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider text-neutral-300 uppercase">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {onEditService && (
                  <button
                    onClick={() => onEditService(service)}
                    title="Editar este serviço"
                    className="absolute top-3 right-3 p-1.5 rounded-md bg-black/75 hover:bg-red-600/80 text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white uppercase font-heading group-hover:text-red-400 transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <a
                    href={getWhatsAppLinkForService(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white btn-3d-red flex items-center justify-center gap-2 text-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Solicitar Orçamento</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
