import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log('request', request);
  const { id } = params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id)
    }
  });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  console.log('body', body);
  const { id } = params;
  const user = await prisma.user.update({
    where: {
      id: Number(id)
    },
    data: body
  });
  return NextResponse.json(user);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // const body = await request.json();
  // console.log('body', body);
  const { id } = params;
  const user = await prisma.user.delete({
    where: {
      id: Number(id)
    }
  });
  return NextResponse.json(user);
}
