import Logo from '/src/app/assets/siterka-logo.svg';
import Image from 'next/image';

import './Header.scss';

const Header = () => {
  const isUser = false;
  return (
    <header>
      <div className='logo'>
        <a href='/'>
          <Image src={Logo} alt='Siterka' width={160} />
        </a>
      </div>
      <nav>
        <ul className='main-links'>
          <li>
            <a href='/sitters'>Searching sitter</a>
          </li>
          <li>
            <a href='/sitter-jobs'>Searching sitter job</a>
          </li>
          <li>
            <a className='in-progress' href='/blog'>
              Blog
            </a>
          </li>
          <li>
            <a className='in-progress' href='/chat'>
              Chat with us
            </a>
          </li>
        </ul>
        <ul className='user-links'>
          <li>
            <a href='#'>Language</a>
          </li>
          {isUser ? (
            <li>
              <a href='/profile'>Avatar</a>
            </li>
          ) : (
            <>
              <li>
                <a href='/login'>Sign in</a>
              </li>
              <li>
                <a className='join' href='/register'>
                  Join
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
