"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX, Pause, Play } from "lucide-react";
import { useMusicContext } from "../context/MusicContext";

export function MusicPlayer() {
  const { isPlaying, setIsPlaying } = useMusicContext();
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle mute
  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  // Set initial volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
      >
        {/* Add your music file URL here */}
        <source src="/music/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Music Player */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="fixed bottom-20 md:bottom-24 left-4 md:left-8 z-40"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative">
          {/* Main Music Button */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative w-12 h-12 md:w-14 md:h-14 rounded-full
              bg-gradient-to-br from-[var(--secondary)] to-[hsl(var(--primary))]
              shadow-lg hover:shadow-xl
              flex items-center justify-center
              transition-all duration-300
              ${isPlaying ? 'animate-pulse' : ''}
            `}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {/* Animated rings when playing */}
            {isPlaying && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[var(--secondary)]"
                  animate={{
                    scale: [1, 1.5, 1.5],
                    opacity: [0.6, 0, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[var(--secondary)]"
                  animate={{
                    scale: [1, 1.5, 1.5],
                    opacity: [0.6, 0, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 1,
                  }}
                />
              </>
            )}

            {/* Icon */}
            <motion.div
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={isPlaying ? { duration: 3, repeat: Infinity, ease: "linear" } : {}}
            >
              {isPlaying ? (
                <Music className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <Music className="w-5 h-5 md:w-6 md:h-6 text-white" />
              )}
            </motion.div>

          
          </motion.button>

          {/* Controls Panel (shows on hover) */}
          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-16 md:left-20 top-1/2 -translate-y-1/2 bg-[hsl(var(--card))] backdrop-blur-md border border-[hsl(var(--border))] rounded-2xl shadow-xl p-3 md:p-4 flex items-center gap-3 md:gap-4 min-w-[200px]"
              >
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--secondary)]/20 hover:bg-[var(--secondary)]/30 flex items-center justify-center transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 md:w-5 md:h-5 text-[var(--secondary)]" />
                  ) : (
                    <Play className="w-4 h-4 md:w-5 md:h-5 text-[var(--secondary)] ml-0.5" />
                  )}
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2 flex-1">
                  <button
                    onClick={toggleMute}
                    className="text-[hsl(var(--muted-foreground))] hover:text-[var(--secondary)] transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  {/* Volume Slider */}
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="flex-1 h-1 bg-[hsl(var(--border))] rounded-full outline-none appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-3
                      [&::-webkit-slider-thumb]:h-3
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-[var(--secondary)]
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:transition-all
                      [&::-webkit-slider-thumb]:hover:scale-110
                      [&::-moz-range-thumb]:w-3
                      [&::-moz-range-thumb]:h-3
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-[var(--secondary)]
                      [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:cursor-pointer"
                    aria-label="Volume control"
                  />
                </div>

                {/* Volume percentage */}
                <span className="text-xs text-[hsl(var(--muted-foreground))] min-w-[2rem] text-right">
                  {Math.round(volume * 100)}%
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
