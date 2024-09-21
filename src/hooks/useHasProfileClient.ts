import { useEffect, useState } from 'react';
import useHasProfile from './useHasProfile';

export default function useHasProfileClient(userId: number) {
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    (async () => {
      const profile = await useHasProfile(userId);
      setHasProfile(!!profile);
    })();
  }, []);

  return hasProfile;
}
