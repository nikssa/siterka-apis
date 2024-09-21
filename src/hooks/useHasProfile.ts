import { getProfile } from '@/data-access/profile';

export default async function useHasProfile(userId: number) {
  //   console.log('userId', userId);
  const profile = await getProfile(userId);
  console.log('profile', profile);

  const hasProfile = !!profile;
  return hasProfile;
}
