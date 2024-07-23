import Logo from '/src/app/assets/siterka-logo.svg';
import Image from 'next/image';

import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Image src={Logo} alt='Siterka' width={160} />
      </div>
    </header>
  );
};

export default Header;
