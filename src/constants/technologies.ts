export type Technology = {
  url?: string;
};

export type TechnologyName = keyof typeof TECHNOLOGIES;

export const TECHNOLOGIES = {
  Asana: { url: "https://asana.com/" },
  Astro: { url: "https://astro.build/" },
  "Auth.js": { url: "https://authjs.dev/" },
  Axios: { url: "https://axios-http.com/" },
  ClickUp: { url: "https://clickup.com/" },
  Clockify: { url: "https://clockify.me/" },
  Contentful: { url: "https://contentful.com/" },
  CSS: { url: undefined },
  "CSS Modules": { url: undefined },
  cva: { url: "https://cva.style/" },
  "date-fns": { url: "https://date-fns.org/" },
  Deno: { url: "https://deno.com/" },
  Discord: { url: "https://discord.com/" },
  Docker: { url: "https://docker.com/" },
  "Drizzle ORM": { url: "https://orm.drizzle.team/" },
  "Edito CMS": { url: "https://edito.pl/" },
  ESLint: { url: "https://eslint.org/" },
  Express: { url: "https://expressjs.com/" },
  Figma: { url: "https://figma.com/" },
  Git: { url: "https://git-scm.com/" },
  GitHub: { url: "https://github.com/" },
  "GitHub Projects": {
    url: "https://docs.github.com/en/issues/planning-and-tracking-with-projects",
  },
  GitLab: { url: "https://gitlab.com/" },
  "Google Workspace": { url: "https://workspace.google.com/" },
  GraphQL: { url: "https://graphql.org/" },
  "Headless UI": { url: "https://headlessui.com/" },
  Heroku: { url: "https://heroku.com/" },
  JavaScript: { url: undefined },
  Jest: { url: "https://jestjs.io/" },
  HTML: { url: undefined },
  i18next: { url: "https://i18next.com/" },
  Lodash: { url: "https://lodash.com/" },
  LOGITO: { url: "https://logito.pl/" },
  Markdown: { url: undefined },
  "Material UI": { url: "https://mui.com/material-ui" },
  "Microsoft Teams": { url: "https://microsoft.com/en-us/microsoft-teams" },
  MySQL: { url: "https://mysql.com/" },
  "Next.js": { url: "https://nextjs.org/" },
  Neon: { url: "https://neon.tech/" },
  "Node.js": { url: "https://nodejs.org/" },
  Nodemailer: { url: "https://nodemailer.com/" },
  PlanetScale: { url: "https://planetscale.com/" },
  Playwright: { url: "https://playwright.dev/" },
  PostgreSQL: { url: "https://www.postgresql.org/" },
  Prettier: { url: "https://prettier.io/" },
  Prisma: { url: "https://prisma.io/" },
  "Radix UI": { url: "https://radix-ui.com/" },
  React: { url: "https://react.dev/" },
  "React Hook Form": { url: "https://react-hook-form.com/" },
  "React Testing Library": {
    url: "https://testing-library.com/docs/react-testing-library/intro",
  },
  "React Three Fiber": { url: "https://docs.pmnd.rs/react-three-fiber" },
  Redmine: { url: "https://redmine.org/" },
  Redux: { url: "https://redux.js.org/" },
  Sass: { url: "https://sass-lang.com/" },
  SolidJS: { url: "https://solidjs.com/" },
  SQLite: { url: "https://sqlite.org/" },
  "SQL Server": { url: "https://microsoft.com/en-us/sql-server" },
  Stitches: { url: "https://stitches.dev/" },
  "styled-components": { url: "https://styled-components.com/" },
  StyleX: { url: "https://stylexjs.com/" },
  SQL: { url: undefined },
  "Tailwind CSS": { url: "https://tailwindcss.com/" },
  "TanStack Query": { url: "https://tanstack.com/query" },
  "Three.js": { url: "https://threejs.org/" },
  TipTap: { url: "https://tiptap.dev/" },
  Trello: { url: "https://trello.com/" },
  tRPC: { url: "https://trpc.io/" },
  TypeScript: { url: "https://typescriptlang.org/" },
  "vanilla-extract": { url: "https://vanilla-extract.style/" },
  Vercel: { url: "https://vercel.com/" },
  Vitest: { url: "https://vitest.dev/" },
  "Vue.js": { url: "https://vuejs.org/" },
  Zod: { url: "https://zod.dev/" },
  Zustand: { url: "https://docs.pmnd.rs/zustand" },
} satisfies Record<string, Technology>;
