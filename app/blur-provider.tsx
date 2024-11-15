"use client";
import { createContext, useState } from 'react';

export const BlurContext = createContext<{
  isBlurred: boolean;
  setIsBlurred: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isBlurred: false,
  setIsBlurred: () => {},
});

export function BlurProvider({ children }: { children: React.ReactNode }) {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <BlurContext.Provider value={{ isBlurred, setIsBlurred }}>
      {children}
    </BlurContext.Provider>
  );
} 