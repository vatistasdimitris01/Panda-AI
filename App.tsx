import React from 'react';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-panda-950 text-white selection:bg-bamboo-500 selection:text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-bamboo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
      </div>
      
      <main className="z-10 w-full max-w-4xl px-4">
        <Hero />
      </main>
    </div>
  );
};

export default App;