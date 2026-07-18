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
    const browserWindow = window as Window &
      typeof globalThis & {
        requestIdleCallback?: (
          callback: IdleRequestCallback,
          options?: IdleRequestOptions
        ) => number;
        cancelIdleCallback?: (handle: number) => void;
      };
    const reveal = () => setReady(true);
    if (browserWindow.requestIdleCallback) {
      const idleId = browserWindow.requestIdleCallback(reveal, {
        timeout: 2500,
      });
      return () => browserWindow.cancelIdleCallback?.(idleId);
    }
    const timeoutId = browserWindow.setTimeout(reveal, 1800);
    return () => browserWindow.clearTimeout(timeoutId);
  }, []);

  return ready ? <ChatBot /> : null;
}
