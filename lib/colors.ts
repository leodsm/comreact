import { categoryColors } from "./categories";

export function categoryColor(cat: string){
  return categoryColors[cat as keyof typeof categoryColors] ?? "#64748B";
}
