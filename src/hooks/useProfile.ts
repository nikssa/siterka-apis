import { getProfile } from '@/data-access/profile';

export default async function useProfile(userId: number) {
  const profile = await getProfile(userId);

  return profile;
}
