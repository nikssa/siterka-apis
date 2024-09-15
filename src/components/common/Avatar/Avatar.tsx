'use client';

import { deleteSession } from '@/utils/session';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Avatar() {
  const router = useRouter();
  return (
    <Link
      href='/'
      title='Logout'
      onClick={(e) => {
        e.preventDefault();
        deleteSession();
        router.push('/login');
      }}>
      Avatar
    </Link>
  );
}
