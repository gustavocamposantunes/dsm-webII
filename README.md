# Projeto: dsm-webII (Acompanhamento de Desenvolvimento Web II)

Este é um projeto Next.js criado com `create-next-app` e adaptado como um projeto alternativo para acompanhar a disciplina "Desenvolvimento Web II".

Importante: neste repositório eu (aluno) adotei as bibliotecas `react-hook-form` e `zod` para validação e gerenciamento de formulários, como alternativa a `formik` e `yup` que são usados pelo professor nas aulas. O objetivo é acompanhar os conceitos da disciplina, mas aplicando outra stack de formulários/validação.

## Como executar (rápido)

Instale dependências e execute em modo de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Ou, se preferir com npm/yarn:

```bash
npm install
npm run dev
# ou
yarn
yarn dev
```

Abra http://localhost:3000 no navegador.

## Scripts úteis

Os scripts definidos em `package.json` e suas descrições:

- `dev` (`pnpm dev` / `npm run dev` / `yarn dev`) — inicia o servidor de desenvolvimento com Next.js. Neste projeto o comando executa `next dev --turbopack` (usa Turbopack quando disponível para bundling mais rápido durante o desenvolvimento).
- `build` (`pnpm build` / `npm run build` / `yarn build`) — gera o build de produção. Executa `next build --turbopack` para preparar o app para deploy.
- `start` (`pnpm start` / `npm start` / `yarn start`) — inicia o servidor em modo produção (use após `build`). Executa `next start`.
- `lint` (`pnpm lint` / `npm run lint` / `yarn lint`) — executa o ESLint configurado no projeto (comando `eslint`).

Exemplos de uso (com pnpm):

```bash
pnpm dev    # desenvolvimento
pnpm build  # gerar build de produção
pnpm start  # iniciar app em produção (após build)
pnpm lint   # rodar lint
```

## Exemplos comparativos

Criei uma documentação com exemplos comparativos entre Formik+Yup e React Hook Form+Zod em:

- `docs/formik-vs-rhf.md`

O arquivo contém snippets lado a lado, notas de migração e instruções de instalação das dependências necessárias caso você queira executar os exemplos localmente.

## Principais bibliotecas e stack

- Next.js
- React
- TypeScript
- react-hook-form (gerenciamento de formulários)
- zod (validação de schemas)
- pnpm (gerenciador de pacotes usado neste repositório)

Consulte `package.json` para a lista completa de dependências.

## Estrutura relevante do projeto

- `src/app/` — rotas e páginas da aplicação (Next.js App Router)
- `src/components/` — componentes React reutilizáveis
- `src/schemas/` — schemas Zod (ex.: `registerProductSchema.ts`)
- `src/api/` ou `src/app/api/` — endpoints API (rotas em `app/api/products`)
- `src/lib/` — utilitários e store (ex.: `mockStore.ts`)

O projeto também demonstra organização por localidade (`[locale]`) para fins de internacionalização básica.

## Observações sobre a abordagem alternativa

- A combinação `react-hook-form` + `zod` proporciona formulários com tipagem forte e integração simples com validação por schema.
- Como o professor usa `formik` + `yup`, alguns exemplos das aulas podem não bater 1:1 com os arquivos daqui; porém a lógica (validação, envio, feedback ao usuário) é a mesma.
- Se desejar, posso transformar os snippets em componentes executáveis dentro de `src/components/` e atualizar o README com links diretos.

## Uso e contribuição

Este repositório serve principalmente como material de estudo e apoio durante a disciplina. PRs e sugestões são bem-vindas — abra uma issue se quiser propor algo grande.

## Referências rápidas

- Next.js: https://nextjs.org
- react-hook-form: https://react-hook-form.com
- zod: https://github.com/colinhacks/zod

---

README atualizado para português — projeto adaptado como alternativa didática usando `react-hook-form` + `zod`.
# Projeto: dsm-webII (Acompanhamento de Desenvolvimento Web II)

Este é um projeto Next.js criado com `create-next-app` e adaptado como um projeto alternativo para acompanhar a disciplina "Desenvolvimento Web II".

Importante: neste repositório eu (aluno) adotei as bibliotecas `react-hook-form` e `zod` para validação e gerenciamento de formulários, como alternativa a `formik` e `yup` que são usados pelo professor nas aulas. O objetivo é acompanhar os conceitos da disciplina, mas aplicando outra stack de formulários/validação.

## Como executar (rápido)

Instale dependências e execute em modo de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Ou, se preferir com npm/yarn:

```bash
npm install
npm run dev
# ou
yarn
yarn dev
```

Abra http://localhost:3000 no navegador.

## Scripts úteis

Os scripts definidos em `package.json` e suas descrições:

- `dev` (`pnpm dev` / `npm run dev` / `yarn dev`) — inicia o servidor de desenvolvimento com Next.js. Neste projeto o comando executa `next dev --turbopack` (usa Turbopack quando disponível para bundling mais rápido durante o desenvolvimento).
- `build` (`pnpm build` / `npm run build` / `yarn build`) — gera o build de produção. Executa `next build --turbopack` para preparar o app para deploy.
- `start` (`pnpm start` / `npm start` / `yarn start`) — inicia o servidor em modo produção (use após `build`). Executa `next start`.
- `lint` (`pnpm lint` / `npm run lint` / `yarn lint`) — executa o ESLint configurado no projeto (comando `eslint`).

Exemplos de uso (com pnpm):

```bash
pnpm dev    # desenvolvimento
pnpm build  # gerar build de produção
pnpm start  # iniciar app em produção (após build)
pnpm lint   # rodar lint
```

## Principais bibliotecas e stack

- Next.js
- React
- TypeScript
- react-hook-form (gerenciamento de formulários)
- zod (validação de schemas)
- pnpm (gerenciador de pacotes usado neste repositório)

Consulte `package.json` para a lista completa de dependências.

## Estrutura relevante do projeto

- `src/app/` — rotas e páginas da aplicação (Next.js App Router)
- `src/components/` — componentes React reutilizáveis
- `src/schemas/` — schemas Zod (ex.: `registerProductSchema.ts`)
- `src/api/` ou `src/app/api/` — endpoints API (rotas em `app/api/products`)
- `src/lib/` — utilitários e store (ex.: `mockStore.ts`)

O projeto também demonstra organização por localidade (`[locale]`) para fins de internacionalização básica.

## Observações sobre a abordagem alternativa

- A combinação `react-hook-form` + `zod` proporciona formulários com tipagem forte e integração simples com validação por schema.
- Como o professor usa `formik` + `yup`, alguns exemplos das aulas podem não bater 1:1 com os arquivos daqui; porém a lógica (validação, envio, feedback ao usuário) é a mesma.
- Se desejar, posso adicionar exemplos comparativos (formik vs react-hook-form) ou notas explicativas na pasta `docs/`.

## Uso e contribuição

Este repositório serve principalmente como material de estudo e apoio durante a disciplina. PRs e sugestões são bem-vindas — abra uma issue se quiser propor algo grande.

## Referências rápidas

- Next.js: https://nextjs.org
- react-hook-form: https://react-hook-form.com
- zod: https://github.com/colinhacks/zod

---

README atualizado para português — projeto adaptado como alternativa didática usando `react-hook-form` + `zod`.
# Projeto: dsm-webII (Acompanhamento de Desenvolvimento Web II)

Este é um projeto Next.js criado com `create-next-app` e adaptado como um projeto alternativo para acompanhar a disciplina "Desenvolvimento Web II".

Importante: neste repositório eu (aluno) adotei as bibliotecas `react-hook-form` e `zod` para validação e gerenciamento de formulários, como alternativa a `formik` e `yup` que são usados pelo professor nas aulas. O objetivo é acompanhar os conceitos da disciplina, mas aplicando outra stack de formulários/validação.

## Como executar (rápido)

Instale dependências e execute em modo de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Ou, se preferir com npm/yarn:

```bash
npm install
npm run dev
# ou
yarn
yarn dev
```

Abra http://localhost:3000 no navegador.

## Scripts úteis

- `pnpm dev` — inicia o servidor de desenvolvimento
- `pnpm build` — cria build de produção
- `pnpm start` — inicia o app em modo produção (após `pnpm build`)

## Principais bibliotecas e stack

- Next.js
- React
- TypeScript
- react-hook-form (gerenciamento de formulários)
- zod (validação de schemas)
- pnpm (gerenciador de pacotes usado neste repositório)

Consulte `package.json` para a lista completa de dependências.

## Estrutura relevante do projeto

- `src/app/` — rotas e páginas da aplicação (Next.js App Router)
- `src/components/` — componentes React reutilizáveis
- `src/schemas/` — schemas Zod (ex.: `registerProductSchema.ts`)
- `src/api/` ou `src/app/api/` — endpoints API (rotas em `app/api/products`)
- `src/lib/` — utilitários e store (ex.: `mockStore.ts`)

O projeto também demonstra organização por localidade (`[locale]`) para fins de internacionalização básica.

## Observações sobre a abordagem alternativa

- A combinação `react-hook-form` + `zod` proporciona formulários com tipagem forte e integração simples com validação por schema.
- Como o professor usa `formik` + `yup`, alguns exemplos das aulas podem não bater 1:1 com os arquivos daqui; porém a lógica (validação, envio, feedback ao usuário) é a mesma.
- Se desejar, posso adicionar exemplos comparativos (formik vs react-hook-form) ou notas explicativas na pasta `docs/`.

## Uso e contribuição

Este repositório serve principalmente como material de estudo e apoio durante a disciplina. PRs e sugestões são bem-vindas — abra uma issue se quiser propor algo grande.

## Referências rápidas

- Next.js: https://nextjs.org
- react-hook-form: https://react-hook-form.com
- zod: https://github.com/colinhacks/zod

---

README atualizado para português — projeto adaptado como alternativa didática usando `react-hook-form` + `zod`.

