import Logo from '/src/app/assets/siterka-logo.svg';
import Image from 'next/image';
import useUserLoggedIn from '@/hooks/useUserLoggedIn';
import Link from 'next/link';
import Avatar from '../Avatar/Avatar';

import './Header.scss';

const Header = async () => {
  const isUserLoggedIn = await useUserLoggedIn();

  return (
    <header>
      <div className='logo'>
        <Link href='/'>
          <Image src={Logo} alt='Siterka' width={160} priority={true} />
        </Link>
      </div>
      <nav>
        <ul className='main-links'>
          <li>
            <Link href='/sitters'>Searching sitter</Link>
          </li>
          <li>
            <Link href='/sitter-jobs'>Searching sitter job</Link>
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
        <ul className='user-links'>
          <li>
            <Link href='#'>Language</Link>
          </li>
          {isUserLoggedIn ? (
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
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
