"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChatBot = dynamic(
  () => import("./ChatBot").then((module) => module.ChatBot),
  { ssr: false }
);

export function DeferredChatBot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reveal = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(reveal, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }
    const timeoutId = window.setTimeout(reveal, 1800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return ready ? <ChatBot /> : null;
}
