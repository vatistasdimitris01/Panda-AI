import React, { useEffect, useState } from 'react';
import { CopyCommand } from './CopyCommand';

export const Hero: React.FC = () => {
  const [leftArt, setLeftArt] = useState<string>('');
  const [rightArt, setRightArt] = useState<string>('');

  useEffect(() => {
    fetch('/left.md')
      .then(res => res.text())
      .then(text => setLeftArt(text))
      .catch(console.error);
      
    fetch('/right.md')
      .then(res => res.text())
      .then(text => setRightArt(text))
      .catch(console.error);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-16 pt-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 select-none opacity-90 hover:opacity-100 transition-opacity">
        <pre className="font-mono text-[9px] sm:text-[11px] md:text-sm font-bold leading-[1.15] text-panda-600 whitespace-pre text-center md:text-left">
          {leftArt}
        </pre>
        <pre className="font-mono text-[9px] sm:text-[11px] md:text-sm font-bold leading-[1.15] text-white whitespace-pre text-center md:text-left">
          {rightArt}
        </pre>
      </div>

      <div className="flex justify-center w-full px-4">
        <CopyCommand command="curl -fsSL https://get.panda.ai | sh" />
      </div>
    </div>
  );
};