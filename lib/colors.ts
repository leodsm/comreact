export function categoryColor(cat: string){
  switch(cat){
    case "Cultura": return "#FF7A1A";
    case "Gastronomia": return "#F04438";
    case "Esporte": return "#0E3AAF";
    case "Turismo": return "#16A34A";
    default: return "#64748B";
  }
}
