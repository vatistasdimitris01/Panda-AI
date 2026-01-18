import React, { useState, useCallback } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyCommandProps {
  command: string;
}

export const CopyCommand: React.FC<CopyCommandProps> = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, [command]);

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex items-center gap-3 font-mono text-sm sm:text-base md:text-lg text-panda-100">
        <span className="text-bamboo-500 select-none">$</span>
        <span>{command}</span>
      </div>
      
      <button
        onClick={handleCopy}
        className="p-2 text-panda-600 hover:text-white transition-colors focus:outline-none"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={18} className="text-bamboo-500" />
        ) : (
          <Copy size={18} />
        )}
      </button>
    </div>
  );
};