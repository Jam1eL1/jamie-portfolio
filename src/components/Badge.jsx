import React from "react";
import clsx from "clsx";

export function Badge({ children, variant = "tech" }) {
  const badgeVariants = {
    tech: "bg-brand/10 border border-brand/30 text-brand",
    topic: "bg-accent/10 border border-accent/30 text-accent",
    status: "bg-success/10 border border-success/30 text-success",
  };
  return (
    <span
      className={clsx(
        "rounded-[20px] px-3 py-1.5 text-xs/4 font-semibold tracking-[0.05em] uppercase",
        badgeVariants[variant],
      )}
    >
      {children}
    </span>
  );
}
