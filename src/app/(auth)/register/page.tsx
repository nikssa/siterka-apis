import LoginIllustration from '/public/LoginIllustration.jpg';
import Image from 'next/image';

import Logo from '/public/siterka-logo-2.svg';

import RegisterForm from '@/app/components/forms/RegisterForm';

const LoginPage = () => {
  // const [vw, setVw] = useState(0);
  // const [vh, setVh] = useState(0);

  // useEffect(() => {
  //   setVw(window.innerWidth);
  //   setVh(window.innerHeight);
  // }, []);

  // console.log(vw * 0.6, vh);

  return (
    <>
      <div className='login-page'>
        <div className='login-image'>
          <Image src={LoginIllustration} alt='Siterka' layout='fill' />
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

export default LoginPage;
