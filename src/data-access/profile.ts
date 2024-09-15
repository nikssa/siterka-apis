import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import { ProfileDataProps } from '@/types/types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getProfile(userId: number) {
  const isAuthenticated = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  const profile: ProfileDataProps | null = await prisma.profile.findUnique({
    where: {
      userId
    }
  });
  return profile;
}

export async function getProfileIncludeUser(userId: number) {
  const isAuthenticated = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  const profile = await prisma.profile.findUnique({
    where: {
      userId
    },
    include: {
      user: true
    }
  });
  return profile;
}