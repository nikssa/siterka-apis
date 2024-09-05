import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

enum Prop {
  email = 'email',
  name = 'name'
}
type Props = {
  params: {
    prop: Prop;
    value: string;
  };
};

type WhereProps = {
  [P in Prop]: string;
};

export async function GET(request: NextRequest, { params }: Props) {
  const { prop, value } = params;

  const user = await prisma.user.findUnique({
    where: {
      [prop]: value
    } as WhereProps
  });
  return NextResponse.json(user);
}
