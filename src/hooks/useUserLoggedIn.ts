import { verifySession } from '@/utils/session';

export default async function useUserLoggedIn() {
  const session = await verifySession();
  const { id, username, email, role } = session?.data || {};
  const isUserLoggedIn = id && username && email && role;

  return isUserLoggedIn;
}
