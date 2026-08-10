import clsx from "clsx";
import { createPortal } from "react-dom";

export function Toast({ message, type = "success", className = "" }) {
  if (!message) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        "toast-enter min-w-65 rounded-lg px-4 py-3 text-sm font-semibold shadow-md backdrop-blur fixed bottom-4 md:bottom-6 left-1/2 z-100 motion-reduce:animate-none",
        type === "error" ? "bg-danger text-white" : "bg-brand text-white",
        className,
      )}
    >
      {message}
    </div>,
    document.body,
  );
}
