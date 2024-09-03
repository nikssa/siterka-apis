import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const profiles = await prisma.profile.findMany({ include: { user: true } });
  return NextResponse.json(profiles);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { firstName, lastName, gender, bio, userId } = body;
  const profile = await prisma.profile.create({
    data: {
      firstName,
      lastName,
      gender,
      bio,
      userId
    }
  });
  return NextResponse.json(profile);
}
