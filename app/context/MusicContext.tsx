"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface MusicContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const MusicContext = createContext<MusicContextType>({
  isPlaying: false,
  setIsPlaying: () => {},
});

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MusicContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusicContext() {
  return useContext(MusicContext);
}
