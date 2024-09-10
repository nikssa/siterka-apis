'use client';

import { deleteSession } from '@/utils/session';
import Link from 'next/link';

export default function Avatar() {
  return (
    <Link
      href='/profile'
      onClick={(e) => {
        e.preventDefault();
        deleteSession();
      }}>
      Avatar
    </Link>
  );
}
