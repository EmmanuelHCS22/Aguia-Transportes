import React from 'react';

interface Icon3DProps {
  className?: string;
  size?: number;
}

export const Instagram3DIcon: React.FC<Icon3DProps> = ({ className = '', size = 64 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-[26%] p-[2px] transition-transform duration-300 ease-out select-none ${className}`}
    >
      {/* Outer physical depth shadow */}
      <div className="absolute inset-0 rounded-[26%] bg-black/60 translate-y-2 blur-md" />
      
      {/* 3D Chamfered bezel edge */}
      <div className="relative w-full h-full rounded-[26%] p-[2px] bg-gradient-to-b from-white/30 via-white/5 to-black/80 shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
        {/* Main 3D platform body with official Instagram gradient */}
        <div className="relative w-full h-full rounded-[24%] overflow-hidden bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center shadow-inner">
          {/* Top specular curved glass reflection */}
          <div className="absolute top-0 inset-x-0 h-[45%] bg-gradient-to-b from-white/40 to-transparent rounded-t-[24%] pointer-events-none" />
          
          {/* Subtle rim highlight */}
          <div className="absolute inset-0 rounded-[24%] border border-white/25 pointer-events-none" />

          {/* Official Instagram Camera in Embossed 3D */}
          <svg
            viewBox="0 0 24 24"
            className="w-[58%] h-[58%] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const WhatsApp3DIcon: React.FC<Icon3DProps> = ({ className = '', size = 64 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-[26%] p-[2px] transition-transform duration-300 ease-out select-none ${className}`}
    >
      {/* Outer physical depth shadow */}
      <div className="absolute inset-0 rounded-[26%] bg-black/60 translate-y-2 blur-md" />
      
      {/* 3D Chamfered bezel edge */}
      <div className="relative w-full h-full rounded-[26%] p-[2px] bg-gradient-to-b from-white/35 via-white/5 to-black/80 shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
        {/* Main 3D platform body with official WhatsApp emerald gradient */}
        <div className="relative w-full h-full rounded-[24%] overflow-hidden bg-gradient-to-b from-[#28d366] via-[#22be5b] to-[#128c7e] flex items-center justify-center shadow-inner">
          {/* Top specular glass reflection */}
          <div className="absolute top-0 inset-x-0 h-[45%] bg-gradient-to-b from-white/45 to-transparent rounded-t-[24%] pointer-events-none" />
          
          {/* Subtle rim highlight */}
          <div className="absolute inset-0 rounded-[24%] border border-white/30 pointer-events-none" />

          {/* Official WhatsApp icon with soft 3D shadow */}
          <svg
            viewBox="0 0 24 24"
            className="w-[60%] h-[60%] text-white fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)] z-10"
          >
            <path d="M12.004 2C6.48 2 2 6.48 2 12.008c0 1.947.56 3.766 1.527 5.308L2.24 21.68l4.498-1.266a9.96 9.96 0 0 0 5.266 1.488h.004c5.523 0 10.003-4.48 10.003-10.004 0-2.673-1.04-5.187-2.93-7.078A9.957 9.957 0 0 0 12.004 2zm5.828 14.288c-.244.685-1.424 1.306-1.954 1.35-.494.04-1.127.06-3.606-.967-3.17-1.31-5.212-4.545-5.37-4.757-.158-.212-1.289-1.716-1.289-3.272 0-1.557.817-2.324 1.107-2.64.29-.316.634-.395.845-.395.211 0 .423.003.608.012.196.01.46-.074.72.55.264.634.9 2.197.978 2.355.08.158.132.343.026.554-.105.212-.158.343-.316.529-.158.185-.333.413-.476.554-.158.158-.324.33-.14.646.185.316.822 1.338 1.764 2.176 1.213 1.078 2.235 1.413 2.552 1.57.316.158.502.132.686-.08.185-.21.793-.923 1.004-1.24.212-.316.423-.263.714-.157.29.105 1.848.871 2.165 1.03.317.158.528.237.607.369.08.132.08.766-.164 1.451z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const Google3DIcon: React.FC<Icon3DProps> = ({ className = '', size = 64 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-[26%] p-[2px] transition-transform duration-300 ease-out select-none ${className}`}
    >
      {/* Outer physical depth shadow */}
      <div className="absolute inset-0 rounded-[26%] bg-black/60 translate-y-2 blur-md" />
      
      {/* 3D Chamfered bezel edge */}
      <div className="relative w-full h-full rounded-[26%] p-[2px] bg-gradient-to-b from-white/30 via-white/5 to-black/85 shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
        {/* Main 3D platform body with deep obsidian metallic gradient */}
        <div className="relative w-full h-full rounded-[24%] overflow-hidden bg-gradient-to-b from-[#1c1c22] via-[#121216] to-[#0a0a0d] flex items-center justify-center shadow-inner">
          {/* Top specular glass reflection */}
          <div className="absolute top-0 inset-x-0 h-[45%] bg-gradient-to-b from-white/20 to-transparent rounded-t-[24%] pointer-events-none" />
          
          {/* Subtle rim highlight */}
          <div className="absolute inset-0 rounded-[24%] border border-white/15 pointer-events-none" />

          {/* Official Google 4-color "G" logo with 3D bevel and glow */}
          <svg
            viewBox="0 0 24 24"
            className="w-[58%] h-[58%] drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)] z-10"
          >
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.14 0 9.89 0 12s.45 3.86 1.24 5.42l4.04-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
