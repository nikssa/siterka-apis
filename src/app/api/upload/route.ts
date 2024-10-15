import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { writeFile } from 'fs/promises';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// export async function GET() {}

export const POST = async (req: NextRequest) => {
  console.log('req: ', req);
  const formData = await req.formData();

  const userId = Number(formData.get('userId'));

  const profile = await prisma.profile.findUnique({
    where: {
      userId
    }
  });

  const file = formData.get('image') as File;
  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + '_' + file.name.replaceAll(' ', '_');

  try {
    await writeFile(
      path.join(process.cwd(), 'public/uploads/' + filename),
      buffer
    );
    console.log('filename: ', filename);

    const photo = await prisma.photo.create({
      data: {
        url: 'uploads/' + filename,
        authorId: userId
      }
    });

    return NextResponse.json({
      Message: 'Success',
      status: 201
    });
  } catch (error) {
    console.log('Error occurred ', error);
    return NextResponse.json({ Message: 'Failed', status: 500 });
  }
};

// export async function PUT() {}
