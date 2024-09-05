import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  const profile = await prisma.profile.findUnique({
    where: {
      userId: Number(userId)
    },
    include: {
      user: true
    }
  });
  return NextResponse.json(profile);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const body = await request.json();
  const { userId } = params;
  const profile = await prisma.profile.update({
    where: {
      userId: Number(userId)
    },
    data: body
  });
  return NextResponse.json(profile);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  const profile = await prisma.profile.delete({
    where: {
      userId: Number(userId)
    }
  });

  revalidatePath('/profiles');

  return NextResponse.json(profile);
}
