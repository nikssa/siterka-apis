import { NextRequest, NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;
  console.log('loginSubmit', email, password);

  const user = await prisma.user.findUnique({
    where: {
      email,
      password
    }
  });
  console.log('user', user);
  if (!user) {
    return NextResponse.json({
      statusText: 'User email or password is incorrect',
      status: 404,
      success: false,
      user: null
    });
  }

  return NextResponse.json({
    statusText: 'Login successful',
    status: 200,
    success: true,
    user
  });
}
