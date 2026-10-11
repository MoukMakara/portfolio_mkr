"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getTheme = () => document.documentElement.dataset.theme || "dark";

export default function ThemeToggle({ className = "" }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");
  const next = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={`relative inline-flex size-9 items-center justify-center overflow-hidden rounded-lg border border-line bg-fg/[0.03] text-muted transition-colors hover:border-line-strong hover:text-fg ${className}`}
    >
      <Sun
        size={16}
        aria-hidden="true"
        className={`absolute transition-all duration-500 ${theme === "light" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`}
      />
      <Moon
        size={16}
        aria-hidden="true"
        className={`absolute transition-all duration-500 ${theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
      />
    </button>
  );
}
