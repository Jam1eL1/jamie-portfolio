"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { HamburgerButton } from "./HamburgerButton";
import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";

const NAV_ITEMS = [
  { label: "Journals", href: "/journals" },
  { label: "Home", href: "/" },
];

const ITEM_ANGLES = [10, 35, 70];
const RADIUS = 110;

export function NavMenuRadial() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const themeAria = "Toggle theme";
  const allItems = [
    ...NAV_ITEMS.map((item) => ({ ...item, isTheme: false })),
    { label: "theme-toggle", isTheme: true },
  ];

  const closeMenu = () => setOpen(false);

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
    closeMenu();
  };

  return (
    <div className="relative h-12 w-12 pointer-events-auto">
      {open ? <div className="fixed inset-0 z-10" onClick={closeMenu} aria-hidden="true" /> : null}

      {allItems.map((item, i) => {
        const angle = (ITEM_ANGLES[i] * Math.PI) / 180;
        const x = open ? Math.cos(angle) * RADIUS : 0;
        const y = open ? Math.sin(angle) * RADIUS : 0;

        return (
          <div
            key={item.label}
            data-open={open}
            className="radial-item absolute left-1/2 top-1/2 z-20"
            style={{
              "--radial-x": `${-x}px`,
              "--radial-y": `${-y}px`,
              "--radial-delay": `${i * 0.05}s`,
            }}
          >
            {item.isTheme ? (
              <button
                type="button"
                onClick={handleThemeToggle}
                className={clsx(
                  "flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 cursor-pointer",
                  "text-xs font-semibold text-white bg-accent",
                  "shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-150",
                  "hover:brightness-110 active:scale-95",
                )}
                aria-label={themeAria}
                title={themeAria}
              >
                {isDark ? (
                  <SunIcon className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <MoonIcon className="h-4 w-4" aria-hidden="true" />
                )}
                <span>{isDark ? "Light mode" : "Dark mode"}</span>
              </button>
            ) : (
              <Link
                href={item.href}
                onClick={closeMenu}
                className={clsx(
                  "flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5",
                  "text-xs font-semibold text-white bg-brand",
                  "shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-150",
                  "hover:brightness-110 active:scale-95",
                )}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}

      <div className="relative z-30">
        <HamburgerButton isOpen={open} onClick={() => setOpen((prev) => !prev)} />
      </div>
    </div>
  );
}
