import React from 'react';
import { BrainCircuit } from 'lucide-react';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center gap-2">
      <BrainCircuit className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold">LearnPath</span>
    </div>
  );
};