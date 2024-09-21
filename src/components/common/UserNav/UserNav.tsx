'use client';

import Avatar from '../Avatar/Avatar';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import { Icons } from '@/app/assets/icons';

import Anonymous from '@/app/assets/icons/Anonymous';
import { deleteSession } from '@/utils/session';
import { useRouter } from 'next/navigation';
import useIsAuthenticatedClient from '@/hooks/useIsAuthenticatedClient';

import './UserNav.scss';
import useHasProfile from '@/hooks/useHasProfile';
import useHasProfileClient from '@/hooks/useHasProfileClient';

export default function UserNav() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   (async () => {
  //     const { isAuthenticated, loading, error, data } =
  //       await useIsAuthenticated();
  //     setIsAuthenticated(isAuthenticated);
  //   })();
  // });

  const { isAuthenticated, user } = useIsAuthenticatedClient();

  console.log('isAuthenticated user', user);

  const userId = user?.id as number;

  const hasProfile = useHasProfileClient(userId || 4);

  const hasPost = false;

  return (
    <>
      {isAuthenticated ? (
        <>
          <ul className='user-links'>
            <li>
              <Link href={`/profiles/${user?.id}`}>
                {!hasProfile ? 'Create' : 'Edit'} Profile
              </Link>
            </li>
            <li>
              <Link href={`/posts/${user?.id}`}>
                {!hasPost ? 'Create' : 'Edit'} Post
              </Link>
            </li>
            <li>
              <Link onClick={() => {}} href='#'>
                Language
              </Link>
            </li>
            <li>
              <Link
                href='/'
                title='Logout'
                onClick={(e) => {
                  e.preventDefault();
                  deleteSession();
                  router.push('/login');
                }}>
                Logout
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul className='user-links'>
            <li>
              <Link href='#'>Language</Link>
            </li>

            <li>
              <Link href='/login'>Sign in</Link>
            </li>
            <li>
              <Link className='join' href='/register'>
                Join
              </Link>
            </li>
          </ul>
        </>
      )}
      <Avatar isAuth={isAuthenticated} />
    </>
  );
}
