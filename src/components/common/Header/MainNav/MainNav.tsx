import Link from 'next/link';

import './MainNav.scss';
import { useEffect } from 'react';

const MainNav = ({
  toggle,
  setToggle
}: {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 20) {
      setToggle(false);
      document.querySelector('.main-nav')?.classList.remove('open');
      document.querySelector('.bars')?.classList.remove('open');
    }
  }

  return (
    <nav className={toggle ? 'main-nav open' : 'main-nav'}>
      <ul className='main-links'>
        <li>
          <Link href='/sitters'>Find a sitter</Link>
        </li>
        <li>
          <Link href='/sitter-jobs'>Find a sitter job</Link>
        </li>
        <li>
          <Link className='in-progress' href='/blog'>
            Blog
          </Link>
        </li>
        <li>
          <Link className='in-progress' href='/chat'>
            Chat with us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
