import React from 'react';

export const AsciiArt: React.FC = () => {
  const art = `
      / \\__
     (    @\\___
     /         O
    /   (_____/
   /_____/   U
  `;

  return (
    <div className="hidden lg:block select-none opacity-20 hover:opacity-40 transition-opacity duration-700">
      <pre className="text-xs md:text-sm font-bold text-white leading-none tracking-widest text-center">
        {art}
      </pre>
      <div className="text-center mt-4 text-[10px] text-panda-600 uppercase tracking-widest">
        Est. 2025
      </div>
    </div>
  );
};