"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import FormInput from "@/components/FormInput";

export type Product = {
  id: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
};

export default function EditProductForm({ product }: { product: Product }) {
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
        label="Product Name"
        type="text"
        placeholder="e.g. Coffee mug"
        register={register}
        errors={errors}
        helperText="Enter the product name"
        validation={{ required: "Product name is required" }}
      />

      <FormInput
        id="price"
        label="Price"
        type="number"
        placeholder="0.00"
        register={register}
        errors={errors}
        helperText="Price must be greater than or equal to 0"
        validation={{ valueAsNumber: true, min: { value: 0, message: "Price must be >= 0" } }}
      />

      <FormInput
        id="description"
        label="Description"
        type="textarea"
        placeholder="Short description"
        register={register}
        errors={errors}
        helperText="Describe the product"
        rows={4}
        validation={{ required: "Description is required" }}
      />

      <FormInput
        id="category"
        label="Category"
        type="text"
        placeholder="e.g. Kitchen"
        register={register}
        errors={errors}
        helperText="Product category"
        validation={{ required: "Category is required" }}
      />
      <div className="mt-4 flex items-center gap-3">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Save
        </button>
        <Link href="/products" className="text-gray-600 hover:underline">
          Cancel
        </Link>
      </div>
    </form>
  );
}
