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
        "rounded-xl",
        "transition-all duration-300 ease-out",
        "active:scale-95",

        isOpen
          ? "bg-accent text-white shadow-[0_10px_30px_rgba(245,158,11,0.35)]"
          : "bg-surface text-foreground hover:bg-accent hover:text-white hover:shadow-[0_6px_20px_rgba(245,158,11,0.25)]",
      )}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        {isOpen ? (
          <CloseIcon
            className="block h-5 w-5 origin-center transition-transform duration-300 rotate-90"
            aria-hidden="true"
          />
        ) : (
          <HamburgerMenuIcon
            className="block h-5 w-5 origin-center transition-transform duration-300"
            aria-hidden="true"
          />
        )}
      </span>
    </button>
  );
}
