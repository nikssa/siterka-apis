import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const sitters = await prisma.post.findMany({});
  return NextResponse.json(sitters);
}
