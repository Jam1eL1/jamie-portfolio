import React from "react";

export function Section({ children, className = "", ...props }) {
  return (
    <section
      className={`flex flex-col px-6 md:px-10 xl:px-30 gap-8 md:gap-12 xl:gap-16 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}