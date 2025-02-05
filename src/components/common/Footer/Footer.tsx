import Link from 'next/link';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; 2024 All rights reserved by siterka.com™. &nbsp;
        <Link href='https://siterka.com' target='_blank'>
          siterka.com
        </Link>
        ™ is a trademark of{' '}
        <Link href='https://milani.com' target='_blank'>
          milani.com
        </Link>
        . &nbsp;
        <Link href='https://siterka.com/terms/' target='_blank'>
          Terms of Service
        </Link>{' '}
        |{' '}
        <Link href='https://siterka.com/privacy/' target='_blank'>
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
