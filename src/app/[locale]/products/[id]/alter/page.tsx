import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import EditProductForm from './EditProductForm';
import type { Product } from '@/types/product';
import { getTranslations } from 'next-intl/server';

async function fetchProduct(id: string): Promise<Product | undefined> {
  const hdrs = await headers();
  const host = hdrs.get('x-forwarded-host') ?? hdrs.get('host');
  const proto = hdrs.get('x-forwarded-proto') ?? 'http';
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? `${proto}://${host}`;

  const res = await fetch(`${base}/api/products/${id}`, { cache: 'no-store' });
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error('Failed to fetch product');
  const data = await res.json();
  return data.item as Product;
}

export default async function AlterProductPage({ params }: { params: { id: string } }) {
  const [product, t] = await Promise.all([fetchProduct(params.id), getTranslations('pages.alterProduct')]);
  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">{t('title')}</h1>
        <EditProductForm product={product} />
      </div>
    </div>
  );
}
