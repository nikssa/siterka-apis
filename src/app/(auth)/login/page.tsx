import LoginIllustration from '/public/LoginIllustration.jpg';
import Image from 'next/image';
import Logo from '/public/siterka-logo-2.svg';
import LoginForm from '@/components/forms/LoginForm';
import { redirect } from 'next/navigation';
import useIsAuthenticated from '@/hooks/useIsAuthenticated';

export const metadata = {
  title: 'Login page | SITERKA',
  description:
    'Sign in to your account. You will gain full access to our users data.'
};

const LoginPage = async () => {
  const { isAuthenticated } = await useIsAuthenticated();
  if (isAuthenticated) {
    redirect('/');
  }

  return (
    <>
      <div className='login-page'>
        <div className='login-image'>
          <Image src={LoginIllustration} alt='Siterka' priority={true} />
        </div>

        <div className='login-wrapper'>
          <div className='logo'>
            <a href='/'>
              <Image src={Logo} alt='Siterka' width={200} priority={true} />
            </a>
          </div>

          <div className='login-box'>
            <h1>Sign in</h1>
            <p>to gain full access to our users data.</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
