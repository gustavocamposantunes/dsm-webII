# Formik + Yup vs React Hook Form + Zod

Este documento apresenta exemplos comparativos minimalistas para um formulário de cadastro/edição de produto, mostrando a mesma UI/validação implementada com:

- Formik + Yup (abordagem clássica utilizada pelo professor)
- React Hook Form + Zod (abordagem alternativa usada neste repositório)

Os exemplos são exemplos de leitura e comparação; para executá-los localmente você precisará instalar as dependências correspondentes.

## Observações rápidas

- A implementação com Formik tende a centralizar estado/validação no componente `Formik`.
- A combinação React Hook Form + Zod usa `register` para inputs e validação por schema com `zodResolver`, mantendo os inputs mais leves e com boa performance.

## Exemplo (Formik + Yup)

```tsx
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const ProductSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  price: Yup.number().typeError('Deve ser um número').positive('Deve ser > 0').required('Preço obrigatório'),
})

export function FormikProductForm({ onSubmit, initialValues = { name: '', price: '' }}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProductSchema}
      onSubmit={values => onSubmit(values)}
    >
      {() => (
        <Form>
          <label>Nome</label>
          <Field name="name" />
          <ErrorMessage name="name" component="div" />

          <label>Preço</label>
          <Field name="price" />
          <ErrorMessage name="price" component="div" />

          <button type="submit">Salvar</button>
        </Form>
      )}
    </Formik>
  )
}
```

### Dependências necessárias (Formik)

- `formik`
- `yup`

Instale com: `pnpm add formik yup` (ou `npm i formik yup`).

## Exemplo (React Hook Form + Zod)

```tsx
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const ProductSchema = z.object({
  name: z.string().nonempty('Nome obrigatório'),
  // converter string -> number antes de validar
  price: z.preprocess(val => Number(val), z.number().positive('Deve ser > 0')),
})

type ProductFormData = z.infer<typeof ProductSchema>

export function RHFZodProductForm({ onSubmit, initialValues = { name: '', price: '' }}) {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues: initialValues as unknown as ProductFormData,
  })

  return (
    <form onSubmit={handleSubmit(data => onSubmit(data))}>
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

### Dependências necessárias (React Hook Form + Zod)

- `react-hook-form`
- `zod`
- `@hookform/resolvers`

Instale com: `pnpm add react-hook-form zod @hookform/resolvers`.

## Notas de migração rápidas

- Em muitos casos cada `Field` do Formik se transforma em um `register('fieldName')` no RHF.
- Zod fornece tipagem estática via `z.infer<typeof schema>` o que melhora experiência com TypeScript.
- RHF geralmente produz menos re-renders em formulários grandes.

---

Este arquivo é um ponto de partida. Se quiser, posso transformar um destes exemplos em um componente real dentro de `src/components/` para que seja executável dentro do projeto.
