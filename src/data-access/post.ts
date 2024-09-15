import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getPosts() {
  const isAuthenticated = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  const posts = await prisma.post.findMany();
  return posts;
}

export async function getPostByUserId(authorId: number) {
  const isAuthenticated = await useIsAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  const post = await prisma.post.findUnique({ where: { authorId } });
  return post;
}
