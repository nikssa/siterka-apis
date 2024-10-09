import Link from 'next/link';

import './MainNav.scss';
import { useEffect, useRef } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

const MainNav = ({
  toggle,
  setToggle
}: {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const mainNavRef = useRef(null);

  const outsideClick = useOutsideClick(mainNavRef, () => {
    setToggle(false);
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
      setToggle(false);
    }
  }

  function handleResize() {
    if (window.innerWidth > 992) {
      setToggle(false);
    }
  }

  return (
    <nav
      className={toggle ? 'main-nav open' : 'main-nav'}
      ref={mainNavRef}
      onClick={handleOutsideClick}>
      <ul className='main-links'>
        <li>
          <Link href='/sitters' onClick={() => setToggle(false)}>
            Find a sitter
          </Link>
        </li>
        <li>
          <Link href='/sitter-jobs' onClick={() => setToggle(false)}>
            Find a sitter job
          </Link>
        </li>
        <li>
          <Link
            className='in-progress'
            href='/blog'
            onClick={() => setToggle(false)}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            className='in-progress'
            href='/chat'
            onClick={() => setToggle(false)}>
            Chat with us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
