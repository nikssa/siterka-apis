import useIsAuthenticated from './useIsAuthenticated';
import { useEffect, useState } from 'react';
import { UserDataProps } from '@/types/types';

export default function useIsAuthenticatedClient() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserDataProps | null>(null);

  useEffect(() => {
    (async () => {
      const { isAuthenticated, user } = await useIsAuthenticated();
      setIsAuthenticated(isAuthenticated);
      setUser(user);
    })();
  }, []);

  return { isAuthenticated, user };
}
