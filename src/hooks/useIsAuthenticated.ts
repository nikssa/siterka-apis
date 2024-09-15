import { verifySession } from '@/utils/session';

export default async function useIsAuthenticated() {
  const session = await verifySession();
  const user = session?.data;
  const isAuthenticated = !!user?.id;

  return { isAuthenticated, user };
}
