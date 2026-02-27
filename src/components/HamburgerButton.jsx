"use client";

import clsx from "clsx";
import CloseIcon from "@/assets/icons/close.svg";
import HamburgerMenuIcon from "@/assets/icons/hamburger-menu.svg";

export function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className={clsx(
        "relative inline-flex h-12 w-12 items-center justify-center",
        "rounded-xl cursor-pointer",
        "transition-all duration-300 ease-out",
        "active:scale-95",

        isOpen
          ? "bg-accent text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
          : "bg-surface text-foreground hover:bg-accent hover:text-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.25)]",
      )}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        <HamburgerMenuIcon
          className={clsx(
            "absolute block h-5 w-5 origin-center transition-all duration-300 ease-out",
            isOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100",
          )}
          aria-hidden="true"
        />
        <CloseIcon
          className={clsx(
            "absolute block h-5 w-5 origin-center transition-all duration-300 ease-out",
            isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0",
          )}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}
