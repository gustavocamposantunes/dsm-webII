# Projeto: dsm-webII (Acompanhamento de Desenvolvimento Web II)

Este repositório é um projeto de estudo para a disciplina "Desenvolvimento Web II". Ele foi adaptado para usar `react-hook-form` + `zod` como alternativa a `formik` + `yup` (utilizados pelo professor). O objetivo é acompanhar os conceitos da matéria aplicando outra stack para formulários e validação.

## Como executar (rápido)

Instale dependências e execute em modo de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Ou com npm/yarn:

```bash
npm install
npm run dev
# ou
yarn
yarn dev
```

Abra http://localhost:3000 no navegador.

## Scripts (descrição)

Os scripts definidos em `package.json` neste projeto:

- `dev` — inicia o servidor de desenvolvimento (executa `next dev --turbopack`).
- `build` — gera o build de produção (`next build --turbopack`).
- `start` — inicia o app em modo produção (`next start`, use após `build`).
- `lint` — executa o ESLint (`eslint`).

Exemplo com pnpm:

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Exemplos comparativos

Documentação com exemplos comparativos (Formik+Yup vs React Hook Form+Zod):

- `docs/formik-vs-rhf.md`

O arquivo traz snippets lado a lado, notas de migração e instruções de dependências.

## Principais bibliotecas e stack

- Next.js
- React
- TypeScript
- react-hook-form
- zod
- pnpm

Consulte `package.json` para a lista completa de dependências.

## Estrutura relevante do projeto

- `src/app/` — rotas e páginas (Next.js App Router)
- `src/components/` — componentes reutilizáveis
- `src/schemas/` — schemas Zod (ex.: `registerProductSchema.ts`)
- `src/app/api/` — rotas API (ex.: `app/api/products`)
- `src/lib/` — utilitários (ex.: `mockStore.ts`)

## Observações

- `react-hook-form` + `zod` fornece tipagem forte e integração direta com validação por schema.
- Exemplos em aula com `formik` + `yup` podem diferir na API, mas os conceitos de validação/feedback são equivalentes.
- Posso transformar os snippets de `docs/formik-vs-rhf.md` em componentes executáveis dentro de `src/components/examples/` se você quiser.

## Contribuição

Material de estudo. PRs e sugestões são bem-vindas — abra uma issue para propostas maiores.

## Referências rápidas

- Next.js: https://nextjs.org
- react-hook-form: https://react-hook-form.com
- zod: https://github.com/colinhacks/zod

---

README limpo e único (em português).
# Projeto: dsm-webII (Acompanhamento de Desenvolvimento Web II)

> Projeto de estudo para a disciplina "Desenvolvimento Web II". Esta cópia do projeto foi adaptada para usar `react-hook-form` + `zod` em substituição a `formik` + `yup` (usados pelo professor). O objetivo é acompanhar os conceitos da matéria aplicando uma alternativa para formulários e validação.

## Como executar (rápido)

Instale dependências e execute em modo de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Ou com npm/yarn:

```bash
npm install
npm run dev
# ou
yarn
yarn dev
```

Abra http://localhost:3000 no navegador.

## Scripts (descrição)

Os scripts definidos em `package.json`:

- `dev` — inicia o servidor de desenvolvimento (executa `next dev --turbopack` neste projeto).
- `build` — gera o build de produção (`next build --turbopack`).
- `start` — inicia o app em modo produção (`next start`, use após `build`).
- `lint` — executa o ESLint configurado no projeto (`eslint`).

Exemplo com pnpm:

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Exemplos comparativos

Há um documento com exemplos comparativos (Formik+Yup vs React Hook Form+Zod):

- `docs/formik-vs-rhf.md`

O arquivo contém snippets lado a lado, notas de migração e instruções de dependências para executar cada exemplo.

## Principais bibliotecas e stack

- Next.js
- React
- TypeScript
- react-hook-form
- zod
- pnpm (gerenciador de pacotes usado aqui)

Consulte `package.json` para a lista completa de dependências.

## Estrutura relevante do projeto

- `src/app/` — rotas e páginas (Next.js App Router)
- `src/components/` — componentes reutilizáveis
- `src/schemas/` — schemas Zod (ex.: `registerProductSchema.ts`)
- `src/app/api/` — rotas API (ex.: `app/api/products`)
- `src/lib/` — utilitários (ex.: `mockStore.ts`)

## Observações

- A combinação `react-hook-form` + `zod` oferece tipagem forte e integração simples com validação por schema.
- Como o professor usa `formik` + `yup`, os exemplos das aulas podem diferir na API, mas os conceitos (validação, envio, feedback) são equivalentes.
- Se desejar, posso transformar os snippets de `docs/formik-vs-rhf.md` em componentes reais dentro de `src/components/examples/` para execução direta.

## Contribuição

Este repositório é material de estudo. PRs e sugestões são bem-vindas — abra uma issue para algo grande.

## Referências rápidas

- Next.js: https://nextjs.org
- react-hook-form: https://react-hook-form.com
- zod: https://github.com/colinhacks/zod

---

README limpo e único (em português).  
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


Este é um projeto Next.js criado com `create-next-app` e adaptado como um projeto alternativo para acompanhar a disciplina "Desenvolvimento Web II".
