import React from 'react';
import { Instagram3DIcon, WhatsApp3DIcon, Google3DIcon } from './3DIcons';
import { LINKS } from '../data/defaultData';
import { Settings } from 'lucide-react';

interface FooterProps {
  onOpenManageModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenManageModal }) => {
  return (
    <footer
      id="rodape"
      className="relative bg-[#030304] border-t border-white/[0.08] text-white pt-16 pb-12 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Logo and Brand */}
        <div className="w-18 h-18 rounded-full bg-black/80 border border-white/15 p-1 flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.25)] mb-4 overflow-hidden">
          <img
            src="/logo-transparent.png"
            alt="Águia Transportes"
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white font-heading">
          ÁGUIA <span className="text-red-600">TRANSPORTES</span>
        </h3>

        <p className="text-sm text-neutral-400 font-medium mt-1 mb-8">
          &ldquo;Transporte com segurança e compromisso.&rdquo;
        </p>

        {/* Menores Ícones 3D com links */}
        <div className="flex items-center gap-6 mb-10">
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram Águia Transportes"
            className="transform hover:scale-115 transition-transform duration-200"
          >
            <Instagram3DIcon size={44} />
          </a>

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Águia Transportes"
            className="transform hover:scale-115 transition-transform duration-200"
          >
            <WhatsApp3DIcon size={44} />
          </a>

          <a
            href={LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            title="Perfil no Google Águia Transportes"
            className="transform hover:scale-115 transition-transform duration-200"
          >
            <Google3DIcon size={44} />
          </a>
        </div>

        {/* Separator */}
        <div className="w-full max-w-md h-[1px] bg-white/[0.08] mb-8" />

        {/* Bottom copyright and subtle admin switch */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
          <p>© {new Date().getFullYear()} Águia Transportes. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-neutral-600">Transporte Executivo & Particular</span>
            {onOpenManageModal && (
              <button
                onClick={onOpenManageModal}
                className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                title="Painel de Edição de Serviços e Fotos"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Gerenciar Conteúdo</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
