"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import { Robot3D } from "./Robot3D";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm your portfolio assistant. How can I help you today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const robotRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Initialize on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track cursor position for head rotation only
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: inputValue, isBot: false }]);
    setInputValue("");

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "That's a great question! Let me help you with that.",
        "I'd be happy to assist you with your inquiry.",
        "Thanks for reaching out! Here's what I can tell you...",
        "Interesting! Let me provide you with more information.",
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages((prev) => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Robot Icon - Fixed Bottom Right */}
      <AnimatePresence>
        {!isOpen && isClient && (
          <motion.div
            ref={robotRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              scale: { duration: 0.3 },
            }}
            className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-50"
            style={{ pointerEvents: "none" }}
          >
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{ pointerEvents: "auto" }}
              className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl md:rounded-2xl p-1.5 md:p-2 backdrop-blur-sm border border-purple-500/30"
            >
              {/* 3D Robot */}
              <Robot3D 
                cursorPosition={cursorPosition} 
                onClick={() => setIsOpen(true)}
              />
              
              {/* Tooltip */}
              <AnimatePresence>
                {isHovering && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="hidden md:block absolute left-32 top-1/2 -translate-y-1/2 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg border border-[hsl(var(--border))]"
                  >
                    Click to chat!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-2 md:bottom-6 right-2 md:right-6 w-[calc(100%-1rem)] sm:w-96 h-[calc(100vh-5rem)] sm:h-[600px] bg-[hsl(var(--card))] rounded-2xl shadow-2xl border border-[hsl(var(--border))] flex flex-col z-50 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] p-3 md:p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 md:w-6 h-4 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base">Portfolio Assistant</h3>
                  <p className="text-white/80 text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1.5 md:p-2 transition-colors"
              >
                <X className="w-4 md:w-5 h-4 md:h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      message.isBot
                        ? "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
                        : "bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 md:p-4 border-t border-[hsl(var(--border))]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 md:px-4 py-2 text-sm md:text-base bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] placeholder:text-[hsl(var(--muted-foreground))]"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Send className="w-4 md:w-5 h-4 md:h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
