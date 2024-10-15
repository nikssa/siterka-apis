'use server';

import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import { PrismaClient } from '@prisma/client';
import { writeFile, rm } from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

export async function getPhoto(userId: number) {
  const isAuthenticated = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }

  const photo = await prisma.photo.findUnique({
    where: {
      authorId: userId
    }
  });
  return photo;
}

export async function updatePhoto(userId: number, url: string) {
  const isAuthenticated = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  const photo = await prisma.photo.update({
    where: {
      authorId: userId
    },
    data: {
      url
    }
  });
  return photo;
}

export async function deletePhoto(userId: number) {
  const isAuthenticated = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }

  const photo = await prisma.photo.findUnique({
    where: {
      authorId: userId
    }
  });
  if (!photo) {
    return null;
  }

  const url = photo.url;

  console.log('url: ', url);

  try {
    await rm(path.join(process.cwd(), 'public/' + url), {
      recursive: true
    });
  } catch (error) {
    console.log('Error occurred ', error);
  }

  const deletePhoto = await prisma.photo.delete({
    where: {
      authorId: userId
    }
  });
  return deletePhoto;
}
