"use client";
import { createContext, useState } from 'react';

export const BlurContext = createContext({
  isBlurred: false,
  setIsBlurred: (value: boolean) => {},
});

const BlurProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <BlurContext.Provider value={{ isBlurred, setIsBlurred }}>
      {children}
    </BlurContext.Provider>
  );
};

export { BlurProvider };
export default BlurProvider; 