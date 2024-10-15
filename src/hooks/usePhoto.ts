import { getPhoto } from '@/data-access/photo';

export default async function usePhoto(userId: number) {
  const photo = await getPhoto(userId);

  return photo;
}
