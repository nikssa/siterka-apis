import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log('request', request);
  const { userId } = params;
  const user = await prisma.profile.findUnique({
    where: {
      userId: Number(userId)
    }
  });
  return NextResponse.json(user);
}
