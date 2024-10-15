import { PhotoProps } from '@/types/types';
import { useEffect, useState } from 'react';
import usePhoto from './usePhoto';

export default function usePhotoClient(userId: number) {
  const [photo, setPhoto] = useState<PhotoProps | null>(null);

  useEffect(() => {
    (async () => {
      const photo = await usePhoto(userId);
      setPhoto(photo);
    })();
  }, []);

  return photo;
}
