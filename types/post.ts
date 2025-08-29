export interface Slide {
  type: 'image' | 'video' | 'text';
  src?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}

export interface Post {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  slides: Slide[];
  article?: string;
}
