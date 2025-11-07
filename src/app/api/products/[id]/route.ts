import { NextResponse } from 'next/server';
import { getProductById, updateProduct } from '@/lib/mockStore';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ item: product });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const allowed = (({ productName, price, description, category }) => ({ productName, price, description, category }))(body);
  const updated = updateProduct(id, allowed);
  if (!updated) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ item: updated });
}
