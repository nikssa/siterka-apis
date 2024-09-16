'use client';

import Avatar from '../Avatar/Avatar';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import {} from 'react';

export default function User() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const { isAuthenticated } = await useIsAuthenticated();
      setIsAuthenticated(isAuthenticated);
    })();
  });

  return isAuthenticated ? (
    <li>
      <Avatar />
    </li>
  ) : (
    <>
      <li>
        <Link href='/login'>Sign in</Link>
      </li>
      <li>
        <Link className='join' href='/register'>
          Join
        </Link>
      </li>
    </>
  );
}
