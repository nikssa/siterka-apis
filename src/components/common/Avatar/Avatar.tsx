'use client';

import { Icons } from '@/app/assets/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import './Avatar.scss';
import AvatarImage from './AvatarImage';

export default function Avatar({ isAuth }: { isAuth: boolean }) {
  const router = useRouter();
  return (
    <Link
      className={`avatar ${!isAuth ? 'public' : 'auth'}`}
      href='/'
      title='Click to show user menu'
      onClick={() => {}}>
      {!isAuth ? (
        <Icons.Anonymous color='#fefefe' size='22px' />
      ) : (
        <AvatarImage />
      )}
    </Link>
  );
}
