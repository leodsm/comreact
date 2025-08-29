"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header-line">
      <div className="mx-auto max-w-6xl px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            aria-label="Abrir menu"
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
            onClick={() => setOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="select-none font-poppins font-black tracking-tight text-lg sm:text-xl">
            <span className="text-[color:var(--brand-orange)]">Com</span>
            <span className="text-[color:var(--brand-blue)]">Marília</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            aria-label="Pesquisar"
            placeholder="Pesquisar"
            className="hidden md:block px-3 py-1.5 rounded-full text-sm border border-neutral-300/60 dark:border-neutral-700/60 bg-white/70 dark:bg-neutral-900/40 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-blue)]"
          />
          <ThemeToggle />
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
