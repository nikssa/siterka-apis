import { getProfile } from '@/data-access/profile';

export default async function useHasProfile(userId: number) {
  const profile = await getProfile(userId);
  const hasProfile = !!profile;
  return hasProfile;
}
