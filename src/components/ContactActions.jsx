"use client";

import { useEffect, useState } from "react";
import GithubIcon from "@/assets/icons/github.svg";
import GmailIcon from "@/assets/icons/gmail.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import { Toast } from "./Toast";

export function ContactActions() {
  const email = "23jisu@gmail.com";
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setToast({ type: "success", message: "Email copied to clipboard." });
    } catch (err) {
      setToast({ type: "error", message: "Could not copy email. Please try again." });
      console.error("Failed to copy:", err);
    }
  }

  return (
    <>
      <div className="flex w-full justify-start items-center gap-3">
        <a href="https://linkedin.com/in/jisu-lee-b08573394" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="h-6 w-6 text-accent hover:opacity-70 transition-opacity" />
        </a>
        <a href="https://github.com/Jam1eL1" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="h-6 w-6 align-middle text-muted-foreground hover:opacity-70 transition-opacity" />
        </a>
        <button type="button" onClick={handleCopyEmail} aria-label="Copy email address" className="cursor-pointer">
          <GmailIcon className="h-4.5 w-6 text-muted-foreground hover:opacity-70 transition-opacity" />
        </button>
        <a href="">
          <p className="text-base/[26px] font-normal text-brand hover:opacity-80 transition-opacity">View Résumé</p>
        </a>
      </div>

      {toast ? (
        <Toast message={toast.message} type={toast.type} className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100]" />
      ) : null}
    </>
  );
}
