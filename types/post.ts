import type { Category } from "../lib/categories";

export interface Slide {
  type: 'image' | 'video' | 'text';
  src?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}

export interface Post {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  image: string;
  slides: Slide[];
  article?: string;
}
