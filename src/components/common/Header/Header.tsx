'use client';

import { useState } from 'react';
import Logo from '/src/app/assets/siterka-logo-inverse.svg';
import Image from 'next/image';
import Link from 'next/link';
import UserNav from '@/components/common/Header/UserNav/UserNav';
import { Icons } from '../../../app/assets/icons';
import MainNav from './MainNav/MainNav';
import './Header.scss';

const Header = () => {
  const [toggleMainNav, setToggleMainNav] = useState(false);

  return (
    <header>
      <Icons.Bars
        toggle={toggleMainNav}
        className='bars'
        size='50px'
        onClick={(e) => {
          e.preventDefault();
          setToggleMainNav(!toggleMainNav);
        }}
      />

      <div className='logo'>
        <Link href='/'>
          <Image src={Logo} alt='Siterka' width={160} priority={true} />
        </Link>
      </div>

      <MainNav toggle={toggleMainNav} setToggle={setToggleMainNav} />

      <UserNav />
    </header>
  );
};

export default Header;
