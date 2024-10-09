import useIsAuthenticated from './useIsAuthenticated';
import { useEffect, useState } from 'react';
import { UserDataProps } from '@/types/types';
import { usePathname, useSearchParams } from 'next/navigation';

export default function useIsAuthenticatedClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserDataProps | null>(null);

  useEffect(() => {
    (async () => {
      const { isAuthenticated, user } = await useIsAuthenticated();
      setIsAuthenticated(isAuthenticated);
      setUser(user);
    })();
  }, [pathname, searchParams]);

  return { isAuthenticated, user };
}
