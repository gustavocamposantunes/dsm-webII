import { NextResponse } from 'next/server';
import { getAllProducts } from '@/lib/mockStore';

export async function GET() {
  const items = getAllProducts();
  return NextResponse.json({ items });
}
