"use client";
import { categories, type Category } from "../lib/categories";

export type CategoryFilterValue = "Tudo" | Category;

export default function CategoryFilter({ value, onChange }: { value: CategoryFilterValue; onChange: (c: CategoryFilterValue)=>void; }){
  const cats: CategoryFilterValue[] = ["Tudo", ...categories];
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
