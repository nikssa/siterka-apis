'use server';

import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import { UserDataProps } from '@/types/types';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Data Transfer Object
function createUserDTO(user: UserDataProps) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    active: user.active,
    deleted: user.deleted
  };
}

export async function getUsers() {
  const { isAuthenticated } = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  const users = await prisma.user.findMany();

  return users;
}

export async function getUser({ userId }: { userId: number }) {
  const { isAuthenticated } = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });
    const userDTO = user ? createUserDTO(user) : null;
    return userDTO;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // console.log('e.code', e.code);
      // The .code property can be accessed in a type-safe manner
      // if (e.code === 'P2002') {
      //   console.log(
      //     'There is a unique constraint violation, a new user cannot be created with this email'
      //   )
      // }
    }
    throw e;
  }

  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: userId
  //   }
  // });
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
  // if (!isAuthenticated) {
  //   return null;
  // }
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
