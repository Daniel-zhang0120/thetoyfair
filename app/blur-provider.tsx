"use client";
import { createContext, useState } from 'react';

export const BlurContext = createContext<{
  isBlurred: boolean;
  setIsBlurred: React.Dispatch<React.SetStateAction<boolean>>;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isBlurred: false,
  setIsBlurred: () => {},
  isExpanded: false, // Initialize isExpanded
  setIsExpanded: () => {}, // Initialize setIsExpanded
});

export function BlurProvider({ children }: { children: React.ReactNode }) {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Add state for isExpanded

  return (
    <BlurContext.Provider value={{ isBlurred, setIsBlurred, isExpanded, setIsExpanded }}> {/* Include isExpanded and setIsExpanded */}
      {children}
    </BlurContext.Provider>
  );
}