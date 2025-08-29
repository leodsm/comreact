"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
  const [dark, setDark] = useState(false);
  useEffect(()=>{
    const cls = document.documentElement.classList;
    const isDark = cls.contains("dark");
    setDark(isDark);
  },[]);
  const toggle = () => {
    const cls = document.documentElement.classList;
    const next = !cls.contains("dark");
    cls.toggle("dark", next);
    setDark(next);
    try{ localStorage.setItem("cm-theme", next ? "dark" : "light"); }catch(e){}
  };
  return (
    <button onClick={toggle} aria-label="Alternar tema" className="px-2 py-1 rounded-full text-sm border border-neutral-300/60 dark:border-neutral-700/60">
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
