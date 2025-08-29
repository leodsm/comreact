import type { Post } from "../types/post";

export const posts: Post[] = [
  {
    id: "p01",
    category: "Cultura",
    title: "Festival de Inverno no Centro",
    subtitle: "Música, arte e cinema ao ar livre",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    slides: [
      { type: "image", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop", title: "Palco principal", subtitle: "Atrações a partir das 18h" },
      { type: "image", src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop", title: "Mostra de curtas", subtitle: "Cinema na praça" }
    ],
    article: "O Festival de Inverno reúne artistas locais e visitantes..."
  },
  {
    id: "p02",
    category: "Gastronomia",
    title: "Roteiro do Café Especial",
    subtitle: "As melhores torrefações da região",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    slides: [
      { type: "image", src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop", title: "Notas frutadas", subtitle: "Degustação guiada" },
      { type: "image", src: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop", title: "Métodos filtrados", subtitle: "V60, Aeropress e mais" }
    ],
    article: "O roteiro do café especial passa por torrefações artesanais..."
  },
  {
    id: "p03",
    category: "Turismo",
    title: "Trilhas do Rio Peixe",
    subtitle: "Cachoeiras e mirantes escondidos",
    image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1200&auto=format&fit=crop",
    slides: [
      { type: "image", src: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1200&auto=format&fit=crop", title: "Circuito das águas", subtitle: "Nível moderado" }
    ],
    article: "As trilhas do Rio Peixe revelam paisagens pouco conhecidas..."
  },
  {
    id: "p04",
    category: "Esporte",
    title: "Copa Regional de Futsal",
    subtitle: "Quartas de final neste sábado",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
    slides: [
      { type: "image", src: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop", title: "Clássico municipal", subtitle: "Ingressos populares" }
    ],
    article: "A Copa Regional atrai equipes de toda a região..."
  },
  {
    id: "p05",
    category: "Cultura",
    title: "Feira do Livro Independente",
    subtitle: "Editoras e zines autorais",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop",
    slides: [
      { type: "image", src: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop", title: "Autores locais", subtitle: "Sessão de autógrafos" }
    ],
    article: "A feira reúne editoras e autores independentes..."
  },
  {
    id: "p06",
    category: "Turismo",
    title: "Roteiro Arquitetônico",
    subtitle: "Prédios históricos do centro",
    image: "https://images.unsplash.com/photo-1472148083604-64f1084980b6?q=80&w=1200&auto=format&fit=crop",
    slides: [
      { type: "image", src: "https://images.unsplash.com/photo-1472148083604-64f1084980b6?q=80&w=1200&auto=format&fit=crop", title: "Anos 30 e 40", subtitle: "Passeio guiado" }
    ],
    article: "O roteiro destaca fachadas e histórias curiosas..."
  },
  {
    id: "p07",
    category: "Gastronomia",
    title: "Festival do Pastel",
    subtitle: "Sabores clássicos e autorais",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    slides: [
      { type: "image", src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop", title: "Pastéis doces", subtitle: "Experimente novidades" }
    ],
    article: ""
  },
  {
    id: "p08",
    category: "Esporte",
    title: "Corrida Noturna",
    subtitle: "Inscrições abertas",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    slides: [],
    article: ""
  },
  {
    id: "p09",
    category: "Cultura",
    title: "Mostra de Teatro",
    subtitle: "Grupos convidados",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    slides: [],
    article: ""
  },
  {
    id: "p10",
    category: "Turismo",
    title: "Caminhos da Serra",
    subtitle: "Mirantes e cafés",
    image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1200&auto=format&fit=crop",
    slides: [],
    article: ""
  },
  {
    id: "p11",
    category: "Gastronomia",
    title: "Comida de Rua",
    subtitle: "Roteiro de feirinhas",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop",
    slides: [],
    article: ""
  },
  {
    id: "p12",
    category: "Esporte",
    title: "Bike na Lagoa",
    subtitle: "Pedal coletivo domingo",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
    slides: [],
    article: ""
  }
];
