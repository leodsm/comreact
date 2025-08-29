export const categories = [
  "Cultura",
  "Gastronomia",
  "Esporte",
  "Turismo",
] as const;

export type Category = typeof categories[number];

export const categoryColors: Record<Category, string> = {
  Cultura: "#FF7A1A",
  Gastronomia: "#F04438",
  Esporte: "#0E3AAF",
  Turismo: "#16A34A",
};
