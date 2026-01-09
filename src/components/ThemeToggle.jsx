"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer px-3 py-2 rounded-md bg-surface hover:bg-surface-hover text-foreground"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
