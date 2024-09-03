'use client';

import { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import Input from '../../components/formElements/TextField/TextField';
import LoginIllustration from '/public/LoginIllustration.jpg';
import Image from 'next/image';
import RadioGroup from '../../components/formElements/RadioGroup/RadioGroup';
import Button from '../../components/formElements/Button/Button';

import Logo from '/public/siterka-logo-2.svg';

// import './page.scss';
import Link from 'next/link';

enum Role {
  Sitter = 'sitter',
  Parent = 'parent',
  Moderator = 'moderator',
  Admin = 'admin'
}

type RegisterDataProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Role;
  acceptTerms: boolean;
};

const LoginPage = () => {
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    setVw(window.innerWidth);
    setVh(window.innerHeight);
  }, []);

  console.log(vw * 0.6, vh);

  const initialValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: Role.Sitter,
    acceptTerms: false
  };

  const [registerData, setRegisterData] =
    useState<RegisterDataProps>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();

    console.log('checked', e.target.type);
    console.log('event', e);

    const name = e.target.name;
    const value =
      e.target.type == 'checkbox' ? e.target.checked : e.target.value;

    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // remove confirmPassword from the object 'registerData' and send it to the server
    const { confirmPassword, ...data } = registerData;

    console.log('data', data);
    // debugger;

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setRegisterData(initialValue);
      // TODO toast success message
    } catch (error) {
      console.log(error);
      // TODO toast error message
    } finally {
      // TODO mail confirmation
    }
  };

  // console.log('registerData', registerData);

  useEffect(() => {
    console.log('registerData', registerData);
  }, [registerData]);

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
            <form action='' onSubmit={handleSubmit}>
              <Input
                label='Username'
                name='name'
                type='text'
                placeholder='Username'
                required
                value={registerData.name}
                onChange={handleChange}
              />
              <Input
                label='Email'
                name='email'
                type='email'
                placeholder='Email'
                required
                value={registerData.email}
                onChange={handleChange}
                // error='Email is not valid'
              />
              <Input
                label='Password'
                name='password'
                type='password'
                placeholder='Password'
                required
                value={registerData.password}
                onChange={handleChange}
                // error="Password and Confirm Password don't match"
              />
              <Input
                label='Confirm Password'
                name='confirmPassword'
                type='password'
                placeholder='Confirm Password'
                required
                value={registerData.confirmPassword}
                onChange={handleChange}
                // error="Password and Confirm Password don't match"
              />
              <RadioGroup
                label='Role'
                name='role'
                options={['parent', 'sitter']}
                value={registerData.role}
                onChange={handleChange}
                // error='Please select a role'
              />

              <input
                style={{ marginRight: '10px' }}
                type='checkbox'
                name='acceptTerms'
                id='acceptTerms'
                // value={registerData.acceptTerms}
                // checked={registerData.acceptTerms}
                checked={registerData.acceptTerms}
                onChange={handleChange}
              />

              <label htmlFor='acceptTerms'>
                I accept the terms and conditions
              </label>

              <p className='login-register-link'>
                Already have an account? <Link href='/login'>Sign in</Link>
              </p>

              <Button label='Join' type='submit' />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
