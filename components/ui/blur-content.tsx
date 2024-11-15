"use client";
import { useContext } from 'react';
import { BlurContext } from '@/app/blur-provider';

const BlurContent = ({ children }: { children: React.ReactNode }) => {
  const { isBlurred } = useContext(BlurContext);
  
  return (
    <div className={`relative z-0 transition-all duration-300 ${isBlurred ? 'blur-sm' : ''}`}>
      {children}
    </div>
  );
};

export { BlurContent };
export default BlurContent; 