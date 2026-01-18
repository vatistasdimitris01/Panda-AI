import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-black py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-panda-500 text-sm">
          &copy; {new Date().getFullYear()} Panda CLI Inc. Open Source.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-panda-600 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-panda-600 hover:text-white transition-colors">Discord</a>
          <a href="#" className="text-panda-600 hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};