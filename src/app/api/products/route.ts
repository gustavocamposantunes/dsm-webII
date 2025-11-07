import { NextResponse } from 'next/server';
import { getAllProducts, addProduct } from '@/lib/mockStore';
import registerProductSchema from '@/schemas/registerProductSchema';

export async function GET() {
  const items = getAllProducts();
  return NextResponse.json({ items });
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = registerProductSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.format() }, { status: 400 });
  }

  const created = addProduct(parsed.data);
  return NextResponse.json({ item: created }, { status: 201 });
}
