import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Início' },
  { id: 'redes', label: 'Canais' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'orcamento', label: 'Orçamento' },
  { id: 'google', label: 'Google' },
  { id: 'rodape', label: 'Contato' },
];

export const PanelIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside aria-label="Navegação por seções" className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3.5 pointer-events-auto">
      <div className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex flex-col items-center gap-3 shadow-xl">
        {SECTIONS.map((sec, idx) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              aria-label={`Ir para seção ${sec.label}`}
              className="group relative flex items-center justify-center focus:outline-none"
            >
              {/* Tooltip */}
              <span className="absolute right-7 px-2.5 py-1 rounded-md bg-black/90 text-white text-[10px] font-bold uppercase tracking-wider border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                {String(idx + 1).padStart(2, '0')}. {sec.label}
              </span>

              {/* Dot */}
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-6 bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]'
                    : 'w-2 h-2 bg-neutral-600 hover:bg-neutral-300 hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
};
