import { NextResponse } from 'next/server';
import { getProductById, updateProduct } from '@/lib/mockStore';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ item: product });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json().catch(() => ({}));
  const allowed = (({ productName, price, description, category }) => ({ productName, price, description, category }))(body);
  const updated = updateProduct(params.id, allowed);
  if (!updated) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ item: updated });
}
