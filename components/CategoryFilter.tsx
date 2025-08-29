"use client";
import { categories } from "../lib/categories";

export type Category = "Tudo" | (typeof categories)[number];

export default function CategoryFilter({ value, onChange }: { value: Category; onChange: (c: Category)=>void; }){
  const cats: Category[] = ["Tudo", ...categories];
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {cats.map(c => (
        <button key={c} onClick={()=>onChange(c)} className={`px-3 py-1.5 rounded-full text-sm border ${value===c ? "bg-[color:var(--brand-blue)] text-white border-transparent" : "border-neutral-300 dark:border-neutral-700 hover:bg-black/5 dark:hover:bg-white/10"}`}>
          {c}
        </button>
      ))}
    </div>
  );
}
