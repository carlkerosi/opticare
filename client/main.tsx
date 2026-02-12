// Suppress Firebase AbortError warnings immediately on page load
// This must run before any other scripts load
{
  // Helper function to check if an error is a Firebase AbortError
  const isFirebaseAbortError = (error: any): boolean => {
    if (error instanceof Error) {
      return (
        error.name === "AbortError" ||
        error.message.includes("AbortError") ||
        error.message.includes("signal is aborted")
      );
    }
    const errorStr = String(error);
    return (
      errorStr.includes("AbortError") ||
      errorStr.includes("signal is aborted") ||
      errorStr.includes("Stream was cancelled")
    );
  };

  // Suppress Firebase AbortError warnings globally
  // This error is expected when components unmount during pending requests
  window.addEventListener("unhandledrejection", (event) => {
    if (isFirebaseAbortError(event.reason)) {
      event.preventDefault();
    }
  });

  // Also suppress error events
  window.addEventListener("error", (event) => {
    if (isFirebaseAbortError(event.error) || isFirebaseAbortError(event.message)) {
      event.preventDefault();
    }
  }, true);

  // Patch console methods to suppress Firebase AbortError logs
  const originalError = console.error;
  const originalWarn = console.warn;

  const shouldSuppress = (...args: any[]): boolean => {
    return args.some((arg) => isFirebaseAbortError(arg));
  };

  console.error = function (...args: any[]) {
    if (!shouldSuppress(...args)) {
      originalError.apply(this, args);
    }
  };

  console.warn = function (...args: any[]) {
    if (!shouldSuppress(...args)) {
      originalWarn.apply(this, args);
    }
  };
}

import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);
