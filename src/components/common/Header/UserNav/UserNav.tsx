'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Avatar from '../../Avatar/Avatar';

import useHasProfileClient from '@/hooks/useHasProfileClient';
import useIsAuthenticatedClient from '@/hooks/useIsAuthenticatedClient';
import useOutsideClick from '@/hooks/useOutsideClick';
import { deleteSession } from '@/utils/session';
import { useRouter } from 'next/navigation';

import './UserNav.scss';

export default function UserNav() {
  const router = useRouter();

  const { isAuthenticated, user } = useIsAuthenticatedClient();

  const [isUserNavOpen, setIsUserNavOpen] = useState(false);

  const userId = user?.id as number;

  const hasProfile = useHasProfileClient(userId || 4);

  const hasPost = false;

  const handleAvatarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsUserNavOpen(!isUserNavOpen);
  };

  const userLinksRef = useRef(null);

  const outsideClick = useOutsideClick(userLinksRef, () => {
    setIsUserNavOpen(false);
  });

  function handleOutsideClick() {
    outsideClick;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 20) {
      setIsUserNavOpen(false);
    }
  }

  function handleResize() {
    if (window.innerWidth > 992) {
      setIsUserNavOpen(false);
    }
  }

  return isAuthenticated === null ? (
    <div>Loading...</div>
  ) : (
    <>
      {isAuthenticated ? (
        <ul
          className={`user-links auth ${isUserNavOpen ? 'open' : ''}`}
          ref={userLinksRef}
          onClick={handleOutsideClick}>
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
                setIsUserNavOpen(false);
                deleteSession();
                router.push('/?toast=success');
              }}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <>
          <ul
            className={`user-links public ${isUserNavOpen ? 'open' : ''}`}
            ref={userLinksRef}
            onClick={handleOutsideClick}>
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
      <Avatar isAuth={isAuthenticated} onClick={handleAvatarClick} />
    </>
  );
}
