import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const sitters = await prisma.post.findMany({
    include: {
      author: true
    }
  });
  return NextResponse.json(sitters);
}
