import React from 'react';
import { Zap, Shield, Box, Coffee } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Built with Rust for near-instant execution. No more waiting for interpreters."
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Sandboxed environments ensure your local machine stays clean and safe."
  },
  {
    icon: Box,
    title: "Zero Config",
    description: "Intelligent defaults mean you start working immediately, not configuring."
  },
  {
    icon: Coffee,
    title: "Developer First",
    description: "Thoughtful UX designed to keep you in the flow state longer."
  }
];

export const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, idx) => (
        <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all duration-300">
          <div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-4">
            <feature.icon size={20} className="text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
          <p className="text-sm text-panda-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};