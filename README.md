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

## Exemplos comparativos (Formik/Yup vs RHF/Zod)

Os exemplos abaixo mostram a mesma ideia de formulário (nome e preço) implementada com as duas stacks. Estes snippets são ilustrativos; para rodar o exemplo Formik localmente será necessário instalar `formik` e `yup` (não são dependências padrão do projeto).

### Exemplo: Formik + Yup

```tsx
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const ProductSchema = Yup.object({
  name: Yup.string().required('Nome obrigatório'),
  price: Yup.number()
    .typeError('Deve ser um número')
    .positive('Deve ser > 0')
    .required('Preço obrigatório'),
})

export function ExampleFormikYup({ onSubmit }) {
  const initialValues = { name: '', price: '' }
  return (
    <Formik initialValues={initialValues} validationSchema={ProductSchema} onSubmit={onSubmit}>
      <Form>
        <label>Nome</label>
        <Field name="name" />
        <ErrorMessage name="name" component="div" />

        <label>Preço</label>
        <Field name="price" />
        <ErrorMessage name="price" component="div" />

        <button type="submit">Salvar</button>
      </Form>
    </Formik>
  )
}
```

Dependências opcionais para este exemplo:

```bash
pnpm add formik yup
```

### Exemplo: React Hook Form + Zod

```tsx
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const ProductSchema = z.object({
  name: z.string().nonempty('Nome obrigatório'),
  price: z.preprocess((val) => Number(val), z.number().positive('Deve ser > 0')),
})

type ProductFormData = z.infer<typeof ProductSchema>

export function ExampleRHFZod({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues: { name: '', price: '' } as unknown as ProductFormData,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome</label>
      <input {...register('name')} />
      {errors.name && <div>{errors.name.message}</div>}

      <label>Preço</label>
      <input {...register('price')} />
      {errors.price && <div>{errors.price.message}</div>}

      <button type="submit">Salvar</button>
    </form>
  )
}
```

Dependências já presentes no projeto: `react-hook-form`, `zod`, `@hookform/resolvers`.

Mais exemplos comparativos com notas de migração estão em `docs/formik-vs-rhf.md`.

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
- Se quiser, posso mover estes exemplos para `src/components/examples/` para execução direta na aplicação.

## Contribuição

Material de estudo. PRs e sugestões são bem-vindas — abra uma issue para propostas maiores.

## Referências rápidas

- Next.js: https://nextjs.org
- react-hook-form: https://react-hook-form.com
- zod: https://github.com/colinhacks/zod

---

README em português, com exemplos comparativos e scripts documentados.
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
