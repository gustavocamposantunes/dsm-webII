import { faker } from '@faker-js/faker';
import type { Product } from '@/types/product';

// Simple in-memory store persisted across hot reloads via globalThis
const g = globalThis as unknown as { __MOCK_PRODUCTS__?: Product[] };

function makeProduct(): Product {
  return {
    id: faker.string.uuid(),
    productName: faker.commerce.productName(),
    price: Number(faker.commerce.price({ min: 1, max: 999, dec: 2 })),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    imageUrl: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
  };
}

function seedIfNeeded() {
  if (!g.__MOCK_PRODUCTS__) {
    // Use a fixed seed for stability across requests
    faker.seed(42);
    g.__MOCK_PRODUCTS__ = Array.from({ length: 24 }, makeProduct);
  }
}

export function getAllProducts(): Product[] {
  seedIfNeeded();
  return g.__MOCK_PRODUCTS__!;
}

export function getProductById(id: string): Product | undefined {
  seedIfNeeded();
  return g.__MOCK_PRODUCTS__!.find(p => p.id === id);
}

export function updateProduct(id: string, patch: Partial<Omit<Product, 'id'>>): Product | undefined {
  seedIfNeeded();
  const idx = g.__MOCK_PRODUCTS__!.findIndex(p => p.id === id);
  if (idx === -1) return undefined;
  const current = g.__MOCK_PRODUCTS__![idx];
  const updated: Product = { ...current, ...patch, id: current.id };
  g.__MOCK_PRODUCTS__![idx] = updated;
  return updated;
}

export function addProduct(input: Omit<Product, 'id' | 'imageUrl'> & Partial<Pick<Product, 'imageUrl'>>): Product {
  seedIfNeeded();
  const newProduct: Product = {
    id: faker.string.uuid(),
    productName: input.productName,
    price: input.price,
    description: input.description,
    category: input.category,
    imageUrl: input.imageUrl ?? faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
  };
  g.__MOCK_PRODUCTS__!.unshift(newProduct);
  return newProduct;
}
