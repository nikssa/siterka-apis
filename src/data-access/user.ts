import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import { UserDataProps } from '@/types/types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Data Transfer Object
function createUserDTO(user: UserDataProps) {
  return {
    name: user.name,
    email: user.email,
    role: user.role
  };
}

export default async function getUser({ userId }: { userId: number }) {
  const { isAuthenticated } = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  const userDTO = user ? createUserDTO(user) : null;

  return userDTO;
}

export async function getUserIncludeProfile({ userId }: { userId: number }) {
  const { isAuthenticated } = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      profile: true
    }
  });

  return user;
}

export async function getUserIncludePost({ userId }: { userId: number }) {
  const { isAuthenticated } = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      post: true
    }
  });

  return user;
}

export async function getUserIncludeProfileAndPost({
  userId
}: {
  userId: number;
}) {
  const { isAuthenticated } = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      profile: true,
      post: true
    }
  });

  return user;
}
