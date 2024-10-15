import { getProfile } from '@/data-access/profile';
import { ProfileDataProps } from '@/types/types';
import { useEffect, useState } from 'react';
import useProfile from './useProfile';

export default function useProfileClient(userId: number) {
  const [profile, setProfile] = useState<ProfileDataProps | null>(null);

  useEffect(() => {
    (async () => {
      const profile = await useProfile(userId);
      setProfile(profile);
    })();
  }, []);

  return profile;
}
