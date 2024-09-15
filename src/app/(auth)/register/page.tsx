import LoginIllustration from '/public/LoginIllustration.jpg';
import Image from 'next/image';
import Logo from '/public/siterka-logo-2.svg';
import RegisterForm from '@/components/forms/RegisterForm';
import useIsAuthenticated from '@/hooks/useIsAuthenticated';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Register page | SITERKA',
  description:
    'Register new user account. You will gain full access to our users data and be able to create new post/advert.'
};

const RegisterPage = async () => {
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
              <Image src={Logo} alt='Siterka' width={200} />
            </a>
          </div>

          <div className='register-box'>
            <h1>Create account</h1>
            <p>and become user with full access to our user data.</p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
