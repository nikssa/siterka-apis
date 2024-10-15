import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const sitters = await prisma.user.findMany({
    where: {
      role: 'sitter'
    }
  });
  return NextResponse.json(sitters);
}
