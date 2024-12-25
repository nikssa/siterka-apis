import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const sitters = await prisma.user.findMany({
    where: {
      role: 'parent'
    },
    include: {
      post: true,
      profile: {
        include: {
          photo: true
        }
      }
    }
  });
  return NextResponse.json(sitters);
}
