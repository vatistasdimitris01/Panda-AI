import React from 'react';
import { Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-panda-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center group-hover:bg-bamboo-500/20 transition-colors">
              <Terminal size={18} className="text-white group-hover:text-bamboo-400 transition-colors" />
            </div>
            <span className="font-bold text-lg tracking-tight">Panda CLI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#" className="text-sm text-panda-400 hover:text-white transition-colors">Docs</a>
              <a href="#" className="text-sm text-panda-400 hover:text-white transition-colors">Plugins</a>
              <a href="#" className="text-sm text-panda-400 hover:text-white transition-colors">GitHub</a>
              <span className="text-xs text-panda-600 border border-panda-800 rounded px-2 py-0.5">v1.0.4</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};