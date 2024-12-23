import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  const sitters = await prisma.user.findUnique({
    where: {
      id: Number(userId)
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
