"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, Bot } from "lucide-react";
import { Robot3D } from "./Robot3D";

type Message = { text: string; isBot: boolean };

const QUICK_REPLIES = ["View my projects", "My tech stack", "Hire me", "Download resume"];

function getSmartResponse(message: string): string {
  const m = message.toLowerCase();

  if (/\b(hello|hi|hey|sup|howdy)\b/.test(m))
    return "Hey there! 👋 Ask me about Khalil's skills, projects, experience, or how to get in touch.";
  if (/\b(project|work|portfolio|built|created|showcase)\b/.test(m))
    return "Featured work includes the Maroc Telecom rebranding (Liferay + React, +340% performance) and a Three.js 3D iPhone landing page. Scroll to the Projects section to see more!";
  if (/\b(skill|tech|stack|language|framework|tool)\b/.test(m))
    return "Khalil works with React, Next.js, Vue.js, TypeScript, Node.js, Three.js, MongoDB, PostgreSQL, Docker, and more. Full list in the About section!";
  if (/\b(contact|hire|freelance|together|reach|available|work with)\b/.test(m))
    return "Khalil is open to freelance work! Head to the Contact page or email khalil.jammazi366@gmail.com directly.";
  if (/\b(experience|year|background|about)\b/.test(m))
    return "Khalil has 3+ years building modern web applications — from responsive frontends to scalable backends. Based in Morocco, working with clients globally.";
  if (/\b(resume|cv|download)\b/.test(m))
    return "Click the Resume button in the navigation bar at the top of the page to download it!";
  if (/\b(price|cost|rate|budget|charge|fee)\b/.test(m))
    return "Rates vary by project scope and complexity. Use the Contact form to describe your project and get a custom quote!";
  if (/\b(location|where|country|timezone|based|morocco)\b/.test(m))
    return "Khalil is based in Morocco 🇲🇦 and works remotely with clients worldwide across all time zones.";
  if (/\b(name|who are you|who is)\b/.test(m))
    return "Khalil Jammazi — a full-stack developer passionate about building fast, beautiful, and scalable web applications.";
  if (/\b(3d|threejs|three\.js|webgl)\b/.test(m))
    return "Khalil builds immersive 3D experiences with Three.js and WebGL — including this portfolio's liquid hero animation and a 3D iPhone showcase!";

  const fallbacks = [
    "Great question! For more details, explore the sections below or use the Contact form.",
    "Check out the Projects section for a closer look at Khalil's work!",
    "The Contact page is the best way to reach Khalil directly for anything specific.",
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Khalil's portfolio assistant. Ask me anything about his skills, projects, or how to get in touch!", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setIsClient(true); }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setCursorPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;
    setShowQuickReplies(false);
    setMessages(prev => [...prev, { text, isBot: false }]);
    setInputValue("");
    setIsTyping(true);

    const delay = 1000 + Math.random() * 600;
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: getSmartResponse(text), isBot: true }]);
    }, delay);
  };

  return (
    <>
      {/* Floating Robot */}
      <AnimatePresence>
        {!isOpen && isClient && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ scale: { duration: 0.3 } }}
            className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-50"
            style={{ pointerEvents: "none" }}
          >
              <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{ pointerEvents: "auto" }}
                className="relative rounded-xl md:rounded-2xl p-1.5 md:p-2 backdrop-blur-sm border border-[var(--secondary)]/40 bg-[hsl(var(--card))]/80 shadow-lg"
              >
              <Robot3D cursorPosition={cursorPosition} onClick={() => setIsOpen(true)} />
              <AnimatePresence>
                {isHovering && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="hidden md:block absolute left-32 top-1/2 -translate-y-1/2 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg border border-[hsl(var(--border))]"
                  >
                    Chat with me!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-2 md:bottom-6 right-2 md:right-6 w-[calc(100%-1rem)] sm:w-96 h-[calc(100vh-5rem)] sm:h-[600px] bg-[hsl(var(--card))] rounded-2xl shadow-2xl border border-[hsl(var(--border))] flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] p-3 md:p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 md:w-6 h-4 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base">Portfolio Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-white/80 text-xs">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1.5 md:p-2 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 md:w-5 h-4 md:h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  {message.isBot && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--secondary)] to-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed ${
                      message.isBot
                        ? "bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] rounded-2xl rounded-tl-sm"
                        : "bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white rounded-2xl rounded-tr-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex gap-2 justify-start"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--secondary)] to-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-[hsl(var(--muted))] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                      {[0, 0.18, 0.36].map((delay, i) => (
                        <motion.span
                          key={i}
                          className="block w-2 h-2 bg-[hsl(var(--muted-foreground))] rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 0.7, delay }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick reply chips */}
              <AnimatePresence>
                {showQuickReplies && messages.length === 1 && !isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2 pt-1"
                  >
                    {QUICK_REPLIES.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => sendMessage(reply)}
                        className="text-xs px-3 py-1.5 rounded-full border border-[var(--secondary)]/40 text-[var(--secondary)] hover:bg-[var(--secondary)]/10 active:scale-95 transition-all"
                      >
                        {reply}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 md:p-4 border-t border-[hsl(var(--border))] flex-shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage(inputValue)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 md:px-4 py-2 text-sm bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] placeholder:text-[hsl(var(--muted-foreground))] transition-shadow"
                />
                <button
                  onClick={() => sendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform disabled:opacity-50 disabled:scale-100"
                  aria-label="Send message"
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
