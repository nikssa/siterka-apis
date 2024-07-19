import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const profiles = await prisma.profile.findMany();
  return NextResponse.json(profiles);
}
export async function POST(
  request: NextRequest
  //   { params }: { params: { userId: string } }
) {
  const body = await request.json();
  console.log('body', body);
  //   const { userId } = params;
  const userId = Number(body.userId);
  const bio = body.bio;
  const profile = await prisma.profile.create({
    data: {
      bio,
      userId
    }
  });
  return NextResponse.json(profile);
}
