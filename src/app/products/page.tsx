import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';
import { headers } from 'next/headers';

// Use shared Product type

async function fetchProducts(): Promise<Product[]> {
  const hdrs = await headers();
  const host = hdrs.get('x-forwarded-host') ?? hdrs.get('host');
  const proto = hdrs.get('x-forwarded-proto') ?? 'http';
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? `${proto}://${host}`;

  const res = await fetch(`${base}/api/products`, {
    // Ensure this fetch happens on the server and is not cached during dev
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data.items as Product[];
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">
  <h1 className="mb-6 text-3xl font-bold">Products</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link key={p.id} href={`/products/${p.id}/alter`} className="group block">
              <article className="rounded-lg bg-white shadow transition hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image src={p.imageUrl} alt={p.productName} fill className="object-cover transition-transform duration-200 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{p.productName}</h2>
                  <p className="text-sm text-gray-500">{p.category}</p>
                  <p className="mt-2 text-xl font-bold">R$ {p.price.toFixed(2)}</p>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-700">{p.description}</p>
                  <p className="mt-3 text-blue-600 underline underline-offset-4">Alter</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
