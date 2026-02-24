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
        "min-w-[260px] rounded-lg border px-4 py-3 text-sm font-semibold shadow-md backdrop-blur",
        type === "error" ? "border-danger/40 bg-surface text-danger" : "border-brand/40 bg-surface text-foreground",
        className,
      )}
    >
      {message}
    </div>,
    document.body,
  );
}
