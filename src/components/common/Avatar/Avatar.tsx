'use client';

import { Icons } from '@/app/assets/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AvatarImage from './AvatarImage';
import { Suspense } from 'react';
import './Avatar.scss';

export default function Avatar({
  isAuth,
  onClick
}: {
  isAuth: boolean;
  onClick: (e: React.MouseEvent) => void;
}) {
  const router = useRouter();
  return (
    <Link
      className={`avatar ${!isAuth ? 'public' : 'auth'}`}
      href='/'
      title='Click to show user menu'
      onClick={onClick}>
      {!isAuth ? (
        <Icons.Anonymous color='#fefefe' size='22px' />
      ) : (
        <Suspense fallback={<Icons.Anonymous color='#fefefe' size='22px' />}>
          <AvatarImage />
        </Suspense>
      )}
    </Link>
  );
}
