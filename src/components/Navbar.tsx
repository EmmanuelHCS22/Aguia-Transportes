import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { LINKS } from '../data/defaultData';

interface NavbarProps {
  onOpenManageModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenManageModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.08] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Zone - single clean brand element */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-3 group focus-visible:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-black/60 border border-white/15 p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.25)] group-hover:border-red-500/60 transition-colors overflow-hidden shrink-0">
            <img
              src="/logo-transparent.png"
              alt="Águia Transportes"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-base sm:text-lg font-black tracking-wider uppercase text-white font-heading group-hover:text-red-400 transition-colors">
            ÁGUIA <span className="text-red-600">TRANSPORTES</span>
          </span>
        </a>

        {/* Zone 2: Nav Links (Clean typography, 1-2 words) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('redes')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Canais
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('galeria')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Galeria
          </button>
          <button
            onClick={() => scrollToSection('google')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Avaliações
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          {onOpenManageModal && (
            <button
              onClick={onOpenManageModal}
              title="Gerenciar serviços e fotos"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium text-neutral-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
            >
              <span>Fotos & Serviços</span>
            </button>
          )}

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white btn-3d-red transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chamar no WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-white/[0.04] border border-white/10 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#09090b]/98 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-left text-sm font-semibold tracking-wider uppercase text-neutral-200 hover:text-red-500 py-2"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('redes')}
            className="text-left text-sm font-semibold tracking-wider uppercase text-neutral-200 hover:text-red-500 py-2"
          >
            Canais de Contato
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="text-left text-sm font-semibold tracking-wider uppercase text-neutral-200 hover:text-red-500 py-2"
          >
            Nossos Serviços
          </button>
          <button
            onClick={() => scrollToSection('galeria')}
            className="text-left text-sm font-semibold tracking-wider uppercase text-neutral-200 hover:text-red-500 py-2"
          >
            Águia na Estrada (Galeria)
          </button>
          <button
            onClick={() => scrollToSection('google')}
            className="text-left text-sm font-semibold tracking-wider uppercase text-neutral-200 hover:text-red-500 py-2"
          >
            Google & Avaliações
          </button>

          {onOpenManageModal && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenManageModal();
              }}
              className="text-left text-xs font-semibold uppercase text-neutral-400 hover:text-white py-2 border-t border-white/10 mt-1 pt-3"
            >
              + Gerenciar Fotos & Serviços
            </button>
          )}

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white btn-3d-red text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};
