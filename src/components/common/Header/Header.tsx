import Logo from '/src/app/assets/siterka-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import User from '@/components/common/User/User';

import './Header.scss';

const Header = async () => {
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
          <User />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
