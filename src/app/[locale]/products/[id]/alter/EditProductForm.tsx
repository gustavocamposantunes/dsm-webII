"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";
import type { Product } from '@/types/product';
import { useTranslations } from 'next-intl';

export default function EditProductForm({ product }: { product: Product }) {
  const f = useTranslations('forms.product');
  const { register, handleSubmit, formState: { errors } } = useForm<Product>({
    defaultValues: {
      productName: product.productName,
      price: product.price,
      description: product.description,
      category: product.category,
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: Product) => {
    const payload = { ...data };
    const res = await fetch(`/api/products/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      alert('Failed to save product');
      return;
    }
    const json = await res.json();
    alert('Product saved!\n' + JSON.stringify(json.item, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl bg-white p-6 rounded-lg shadow" noValidate>
      <FormInput
        id="productName"
        label={f('productName')}
        type="text"
        placeholder={f('productName')}
        register={register}
        errors={errors}
        helperText=""
        validation={{ required: f('productName') + ' is required' }}
      />

      <FormInput
        id="price"
        label={f('price')}
        type="number"
        placeholder="0.00"
        register={register}
        errors={errors}
        helperText=""
        validation={{ valueAsNumber: true, min: { value: 0, message: ">= 0" } }}
      />

      <FormInput
        id="description"
        label={f('description')}
        type="textarea"
        placeholder={f('description')}
        register={register}
        errors={errors}
        helperText=""
        rows={4}
        validation={{ required: f('description') + ' is required' }}
      />

      <FormInput
        id="category"
        label={f('category')}
        type="text"
        placeholder={f('category')}
        register={register}
        errors={errors}
        helperText=""
        validation={{ required: f('category') + ' is required' }}
      />

      <div className="mt-4 flex items-center gap-3">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          {f('save')}
        </button>
        <a href="../.." className="text-gray-600 hover:underline">
          {f('cancel')}
        </a>
      </div>
    </form>
  );
}
