import { NextRequest, NextResponse } from 'next/server';
import { addMood, getMoods } from '@/utils/moods';

export async function GET() {
  return NextResponse.json(getMoods());
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  addMood(data);
  return NextResponse.json({ success: true });
}
