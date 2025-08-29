# ComReact

Aplicação Next.js que exibe um feed de posts com filtro por categoria e visualização em formato de "stories".

## Requisitos

- Node.js 18 ou superior
- npm

Instale as dependências:

```bash
npm install
```

## Comandos

- `npm run dev` – inicia o servidor de desenvolvimento
- `npm run build` – gera a build de produção
- `npm run lint` – executa a verificação de lint

## Estrutura de diretórios

- `app/` – páginas e layout da aplicação
- `components/` – componentes de interface (cards de posts, modal, etc.)
- `data/` – dados estáticos, como a lista de posts
- `hooks/` – hooks personalizados (ex.: carregamento infinito)
- `lib/` – utilitários e funções de apoio
- `public/` – arquivos estáticos
- `types/` – definições TypeScript utilizadas no projeto

## Fluxo de posts e modal

1. Os posts são definidos em `data/posts.ts` e tipados por `types/post.ts`.
2. Na página principal (`app/page.tsx`) os posts são carregados e filtrados pelo componente `CategoryFilter`.
3. O hook `useInfinite` carrega mais cards conforme o usuário rola a página.
4. Cada card (`PostCard`) abre o `StoryDeckModal`, que apresenta as imagens e textos do post em um carrossel vertical no estilo "stories".

## Adicionando novos posts ou categorias

### Novos posts

Edite `data/posts.ts` e inclua um novo objeto seguindo a interface `Post`.

### Novas categorias

1. Acrescente a nova categoria e sua cor em `lib/categories.ts` (constantes `categories` e `categoryColors`).
2. Utilize a nova categoria nos posts desejados em `data/posts.ts`.
